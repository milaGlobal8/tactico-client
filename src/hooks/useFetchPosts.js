import axios from "axios";

export const useFetchPosts = () => {
  // Home用
  // プレミアリーグ
  const fetchPremierHomePosts = async (setPremierHomePosts) => {
    const response = await axios.get(REACT_APP_API_URL + "/posts/home/premier");
    setPremierHomePosts(response.data);
  };
  // ラリーガ
  const fetchLaligaHomePosts = async (setLaligaHomePosts) => {
    const response = await axios.get("/posts/home/laliga");
    setLaligaHomePosts(response.data);
  };
  // ブンデスリーガ
  const fetchBundesHomePosts = async (setBundesHomePosts) => {
    const response = await axios.get("/posts/home/bundes");
    setBundesHomePosts(response.data);
  };
  // セリエA
  const fetchSerieaHomePosts = async (setSerieaHomePosts) => {
    const response = await axios.get("/posts/home/seriea");
    setSerieaHomePosts(response.data);
  };
  // リーグ・アン
  const fetchLigue1HomePosts = async (setLigue1HomePosts) => {
    const response = await axios.get("/posts/home/ligue1");
    setLigue1HomePosts(response.data);
  };
  // CL
  const fetchClHomePosts = async (setClHomePosts) => {
    const response = await axios.get("/posts/home/cl");
    setClHomePosts(response.data);
  };
  // EL
  const fetchElHomePosts = async (setElHomePosts) => {
    const response = await axios.get("/posts/home/el");
    setElHomePosts(response.data);
  };

  // 各ページ用
  // プレミアリーグ
  const fetchPremierPosts = async (setPremierPosts) => {
    const response = await axios.get("/posts/only/for/premier");
    setPremierPosts(response.data);
  };
  // ラリーガ
  const fetchLaligaPosts = async (setLaligaPosts) => {
    const response = await axios.get("/posts/only/for/laliga");
    setLaligaPosts(response.data);
  };
  // ブンデスリーガ
  const fetchBundesPosts = async (setBundesPosts) => {
    const response = await axios.get("/posts/only/for/bundes");
    setBundesPosts(response.data);
  };
  // セリエA
  const fetchSerieaPosts = async (setSerieaPosts) => {
    const response = await axios.get("/posts/only/for/seriea");
    setSerieaPosts(response.data);
  };
  // リーグ・アン
  const fetchLigue1Posts = async (setLigue1Posts) => {
    const response = await axios.get("/posts/only/for/ligue1");
    setLigue1Posts(response.data);
  };
  // CL
  const fetchClPosts = async (setClPosts) => {
    const response = await axios.get("/posts/only/for/cl");
    setClPosts(response.data);
  };
  // EL
  const fetchElPosts = async (setElPosts) => {
    const response = await axios.get("/posts/only/for/el");
    setElPosts(response.data);
  };
  // JLeague
  const fetchJlPosts = async (setJlPosts) => {
    const response = await axios.get("/posts/only/for/jleague");
    setJlPosts(response.data);
  };
  // National
  const fetchNationalPosts = async (setNationalPosts) => {
    const response = await axios.get("/posts/only/for/national");
    setNationalPosts(response.data);
  };

  return {
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
