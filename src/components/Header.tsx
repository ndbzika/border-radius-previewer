import { Flex, Heading } from "@chakra-ui/react";

export default function Header() {
    return(
        <>
            <Flex justify='center'>
                <Heading as='h1' size='4xl'>
                    Border Radius Previewier
                </Heading>
            </Flex>
        </>
    )
}