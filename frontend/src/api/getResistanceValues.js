import axios from "axios";
import { BASE_URL } from "../constants";

export const getResistanceValues = async (
  bandAColor,
  bandBColor,
  bandCColor,
  bandDColor
) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${BASE_URL}/calculate`,
      data: {
        bandAColor: bandAColor.toLowerCase(),
        bandBColor: bandBColor.toLowerCase(),
        bandCColor: bandCColor.toLowerCase(),
        bandDColor: bandDColor.toLowerCase(),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
