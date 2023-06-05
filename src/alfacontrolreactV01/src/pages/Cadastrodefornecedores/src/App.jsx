import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  Button,
  Img,
} from "@chakra-ui/react";

import Logo from "./componentes/img/logotipo.png"

function App() {
  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="#1D4766"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
      <Img src={Logo} 
       align="left"
       justtify="left"
       />
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl display="flex" flexDir="column" gap="4">
           Cadastro de Fornecedores

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Razão Social</FormLabel>
                <Input id="nome" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input id="email" type="email" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cnpj">CNPJ</FormLabel>
                <Input id="cnpj" type="number" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="inscrição estadual">Inscrição Estadual</FormLabel>
                <Input id="inscrição estadual" type="number" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cel">Celular</FormLabel>
                <Input id="cel" type="number" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="Tefone">Telefone</FormLabel>
                <Input id="Tefone" type="number" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input id="endereco" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input id="cidade" />
              </Box>
            </HStack>
            <HStack justify="left">
              <Button
                w={24}
                p="2"
                type="submit"
                bg="#1D4766"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                _hover={{ bg: "teal.800" }}
              >
                Enviar
              </Button>
            </HStack>
            <HStack justify="right">
              <Button
                w={24}
                p="2"
                type="submit"
                bg="#1D4766"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="-16"
                _hover={{ bg: "teal.800" }}
              >
                Sair
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}

export default App;
