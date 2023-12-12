# Onion S.A.

Bem-vindo ao sistema de controle de vendas da Onion S.A.! Este é um projeto de front-end desenvolvido com Angular.JS para tratar questões de controle de vendas e logística na empresa.

## Descrição do Sistema
O sistema permite aos usuários importar uma planilha de pedidos e visualizar informações cruciais de vendas por meio de:

- Gráfico de Vendas por Região: Apresenta visualização gráfica das vendas baseadas na distribuição regional dos pedidos.
- Gráfico de Vendas por Produto: Exibe gráficos representando as vendas por produto, oferecendo uma visão geral das preferências de compra.
- Lista de Vendas: Apresenta informações detalhadas, incluindo nome do cliente, produto, valor final com entrega e data de entrega.

## Campos da Planilha
Os campos que a planilha precisa ter são:

- CPF ou CNPJ
- Nome ou Razão Social
- CEP
- Produto
- Número do Pedido
- Data

## Instalação
### Pré-Requisitos
- Node.js v18 ou superior

### Passos de Instalação
1. Clone o repositório: `git clone https://github.com/leonardonunessantos/OnionSaApp.git`
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `ng serve`
4. Acesse o sistema em: 'http://localhost:4200'

## Telas do Sistema
O sistema possui duas telas:

### Tela de Importação de Pedidos por Planilha
Nesta tela, os usuários poderão:

- Ler uma descrição do sistema.
- Baixar um exemplo de planilha a ser preenchida.
- Importar a planilha preenchida para o sistema.

### Tela de Exibição de Dados
Nesta tela, os usuários encontrarão:

- Dois gráficos simples em forma de pizza.
- Uma listagem com os pedidos e cálculos relevantes.

## Uso
- Faça o upload da planilha de pedidos na interface do sistema.
- Explore os gráficos e a lista de vendas para obter informações detalhadas.

