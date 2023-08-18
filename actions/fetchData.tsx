"use server";
import { IMeteorite } from "@/types/index";
import moment from "moment";

export async function fetchData(day: number) {
    const apiUrl = `
      https://api.nasa.gov/neo/rest/v1/feed?start_date=${moment()
          .add(day, "days")
          .format("YYYY-MM-DD")}&end_date=${moment()
        .add(day, "days")
        .format("YYYY-MM-DD")}&api_key=zngUzOkvaxaDG0zKbGoIjlczX93L0WBaRvL2y0F3
  `;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const now = moment().add(day, "days");
        const meteorites = data.near_earth_objects[now.format("YYYY-MM-DD")];
        return meteorites;
        // const keys = Object.keys(data.near_earth_objects);
        // let meteors: IMeteorite[] = [];
        // for (let i = 0; i < keys.length; i++) {
        //     data.near_earth_objects[keys[i]].map((item: any) => {
        //         meteors.push(item);
        //     });
        // }

        // let sortedMeteors = meteors.sort((a: IMeteorite, b: IMeteorite) => {
        //     return (
        //         a.close_approach_data[0].epoch_date_close_approach -
        //         b.close_approach_data[0].epoch_date_close_approach
        //     );
        // });

        // return sortedMeteors;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
