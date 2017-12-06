# Cartoon Network Redesign

## Introdução
Baseado em Mockup fornecido, o projeto propõe uma nova página de programação para o site da Cartoon Network.

Considerando que no dia-a-dia a empresa avaliadora utiliza SASS e Angular2+, decidi utilizar tais tecnologia para resolver o exercício. Como benefícios, poderia utilizar o Angular-Cli para criação simples e rápida de um projeto e gerenciar facilmente os eventos dinâmicos propostos no exercício.

Tomei a liberdade de alterar alguns detalhes do mockup, seja por preferências pessoais ou não-disponibilidade de recursos (como a fonte suporte, por exemplo).

Testado em Mozilla Firefox 57, Microsoft Edge 40, Opera 49 e Google Chrome 62 em Windows 10 e Opera 46 em Fedora 19. Tive problemas em Firefox 34 em Fedora 19, mas não tive tempo de entender.

## Execução

```
git clone <repo>
cd cartoon-network
npm install
ng serve
```

Por último acesse http://localhost:4200 para iniciar a aplicação.

Você pode verificar o linting com `ng lint` e rodar os testes unitários com `ng test`.

## Possíveis melhorias

Evidentemente não é um produto 100% finalizado. Como melhorias, eu poderia:
- Adicionar botão para retornar um dia;
- Separar o projeto em módulos;
- Melhorar testes unitários;
- Criar versão para dispositivos de tela pequena (atualmente o projeto funciona relativamente bem à variações pequenas de tamanho de tela);
- Alterar serviços para que utilizem endpoints de um backend para retornar dados;
- Criar rotas (embora talvez não seja tão pertinente no contexto atual desse projeto);

## Screenshots

![Cartoon Network - screenshot](./screenshots/main.png?raw=true)

![Cartoon Network - screenshot](./screenshots/schedule-by-cartoon.png?raw=true)

![Cartoon Network - screenshot](./screenshots/cartoon-details.png?raw=true)