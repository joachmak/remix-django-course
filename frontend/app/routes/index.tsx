import {Center, Text} from "@mantine/core";

export default function Index() {

    return (
        <Center>
            <Text
                component="span"
                align="center"
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                size="xl"
                weight={700}
                style={{ fontFamily: 'Greycliff CF, sans-serif' }}
            >
                ~Let's GOOO~
            </Text>
        </Center>
    );
}
