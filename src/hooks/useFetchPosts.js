import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFetchPosts = () => {
  const navigate = useNavigate();

  // axios処理中のstate [true-ローディング表示/false-非表示]
  const [isAxiosLoadingForPost, setIsAxiosLoadingForPost] = useState(true);
  // Home用
  // プレミアリーグ
  const fetchPremierHomePosts = async (
    setPremierHomePosts,
    setIsAxiosLoadingForPost
  ) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/home/premier")
      .then((response) => {
        setPremierHomePosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // ラリーガ
  const fetchLaligaHomePosts = async (
    setLaligaHomePosts,
    setIsAxiosLoadingForPost
  ) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/home/laliga")
      .then((response) => {
        setLaligaHomePosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // ブンデスリーガ
  const fetchBundesHomePosts = async (
    setBundesHomePosts,
    setIsAxiosLoadingForPost
  ) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/home/bundes")
      .then((response) => {
        setBundesHomePosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // セリエA
  const fetchSerieaHomePosts = async (
    setSerieaHomePosts,
    setIsAxiosLoadingForPost
  ) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/home/seriea")
      .then((response) => {
        setSerieaHomePosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // リーグ・アン
  const fetchLigue1HomePosts = async (
    setLigue1HomePosts,
    setIsAxiosLoadingForPost
  ) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/home/ligue1")
      .then((response) => {
        setLigue1HomePosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // CL
  const fetchClHomePosts = async (setClHomePosts, setIsAxiosLoadingForPost) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/home/cl")
      .then((response) => {
        setClHomePosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // EL
  const fetchElHomePosts = async (setElHomePosts, setIsAxiosLoadingForPost) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/home/el")
      .then((response) => {
        setElHomePosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };

  // 各ページ用
  // プレミアリーグ
  const fetchPremierPosts = async (
    setPremierPosts,
    setIsAxiosLoadingForPost
  ) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/only/for/premier")
      .then((response) => {
        setPremierPosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // ラリーガ
  const fetchLaligaPosts = async (setLaligaPosts, setIsAxiosLoadingForPost) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/only/for/laliga")
      .then((response) => {
        setLaligaPosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // ブンデスリーガ
  const fetchBundesPosts = async (setBundesPosts, setIsAxiosLoadingForPost) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/only/for/bundes")
      .then((response) => {
        setBundesPosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // セリエA
  const fetchSerieaPosts = async (setSerieaPosts, setIsAxiosLoadingForPost) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/only/for/seriea")
      .then((response) => {
        setSerieaPosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // リーグ・アン
  const fetchLigue1Posts = async (setLigue1Posts, setIsAxiosLoadingForPost) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/only/for/ligue1")
      .then((response) => {
        setLigue1Posts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // CL
  const fetchClPosts = async (setClPosts, setIsAxiosLoadingForPost) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/only/for/cl")
      .then((response) => {
        setClPosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // EL
  const fetchElPosts = async (setElPosts, setIsAxiosLoadingForPost) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/only/for/el")
      .then((response) => {
        setElPosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // JLeague
  const fetchJlPosts = async (setJlPosts, setIsAxiosLoadingForPost) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/only/for/jleague")
      .then((response) => {
        setJlPosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };
  // National
  const fetchNationalPosts = async (
    setNationalPosts,
    setIsAxiosLoadingForPost
  ) => {
    setIsAxiosLoadingForPost(true);
    const response = await axios
      .get(process.env.REACT_APP_API_URL + "/posts/only/for/national")
      .then((response) => {
        setNationalPosts(response.data);
        setIsAxiosLoadingForPost(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("*");
      });
  };

  return {
    isAxiosLoadingForPost,
    setIsAxiosLoadingForPost,
    fetchPremierHomePosts,
    fetchLaligaHomePosts,
    fetchBundesHomePosts,
    fetchSerieaHomePosts,
    fetchLigue1HomePosts,
    fetchClHomePosts,
    fetchElHomePosts,
    fetchPremierPosts,
    fetchLaligaPosts,
    fetchBundesPosts,
    fetchSerieaPosts,
    fetchLigue1Posts,
    fetchClPosts,
    fetchElPosts,
    fetchJlPosts,
    fetchNationalPosts,
  };
};
