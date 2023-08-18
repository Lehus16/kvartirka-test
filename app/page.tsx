import EarthWrapper from "../components/EarthWrapper";
import Meteorites from "@/components/Meteorites";
import DistanceButtons from "@/components/DistanceButtons";
import { fetchData } from "@/actions/fetchData";
import moment from "moment";
import Spinner from "@/components/Spinner";
import LoadMoreMeteorites from "@/components/LoadMoreMeteorites";

export default async function Home() {
    const meteorites = await fetchData(0);

    return (
        <>
            <EarthWrapper />
            <Meteorites meteorites={meteorites}>
                <DistanceButtons />
            </Meteorites>
        </>
    );
}
