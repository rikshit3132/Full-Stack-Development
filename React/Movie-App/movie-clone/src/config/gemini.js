export const getMoviesRecommendations = async (watchList) => {
  try {
    const res = await fetch("http://localhost:5000/api/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ watchList }),
    });

    const data = await res.json();

    return {
      recommendations: data,
    };
  } catch (error) {
    console.log("Frontend Error:", error);
    return { recommendations: [] };
  }
};
