export const createImage = (url) =>
  new Promise((resolve, reject) => {
    // imgElement作成
    const image = new Image();

    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });

// ラジアン(θ = θ * π/180)
export function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180;
}

/**
 * 回転した長方形の新しい境界領域を返す
 */
export function rotateSize(width, height, rotation) {
  // ラジアンに変換し三角関数に使用できるようにする
  const rotRad = getRadianAngle(rotation);

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
}

export default async function getCroppedImg(
  imageSrc,
  pixelCrop,
  rotation = 0,
  flip = { horizontal: false, vertical: false }
) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  const rotRad = getRadianAngle(rotation);

  // 回転した画像の領域を計算
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  );

  // キャンバスのサイズを領域に合わせて設定
  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  // キャンバスのコンテキストを中心位置に移動させ、回転・反転することを可能にする
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-image.width / 2, -image.height / 2);

  // 回転した画像を描画
  ctx.drawImage(image, 0, 0);

  // croppedAreaPixels の値は、領域に対する相対的な値
  // これらの値を使用して、切り取られた画像を抽出
  const data = ctx.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height
  );

  // キャンバスの幅を最終的な切り抜きサイズに設定
  // これにより、既存のコンテキストがクリアされる
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // 生成された回転した画像を左上の角に貼り付ける
  ctx.putImageData(data, 0, 0);

  return new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      file.name = "cropped.jpeg";
      resolve({ file: file, url: URL.createObjectURL(file) });
    }, "image/jpeg");
  });
}
