import {Grid} from "@mantine/core";
import HamsterOverview from "~/components/HamsterOveriew";
import SpeciesOverview from "~/components/SpeciesOveriew";

export default function Index() {
    const margin = 2;
    return (
        <>
            <Grid gutter="xs">
                <Grid.Col span={margin} />
                <Grid.Col style={{minHeight: "40vh"}} span={12 - (2 * margin)}>
                    <HamsterOverview />
                </Grid.Col>
                <Grid.Col span={margin} />

                <Grid.Col span={margin} />
                <Grid.Col style={{minHeight: "40vh"}} span={12 - (2 * margin)}>
                    <SpeciesOverview />
                </Grid.Col>
                <Grid.Col span={margin} />
            </Grid>
        </>
    );
}
