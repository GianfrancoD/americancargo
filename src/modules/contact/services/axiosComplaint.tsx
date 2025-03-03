import axios from "axios";

export const axiosServiceComplaint = async (claimData: any) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}api/v1/complaint`,
      { claimData },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(response.data.message);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    if (axios.isAxiosError(error)) {
      console.error("Error message:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};
