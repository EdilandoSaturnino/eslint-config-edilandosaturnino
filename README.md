
# @edilando/eslint-config

Configuração personalizada do ESLint para projetos JavaScript e TypeScript.

## Visão Geral
Este pacote oferece uma configuração ESLint extensiva e personalizada, aprimorando a qualidade do código em projetos JavaScript e TypeScript.

## Instalação
Para incorporar esta configuração do ESLint ao seu projeto, siga estes passos:

1. Adicione o pacote como uma dependência de desenvolvimento:
   ```bash
   npm install @edilando/eslint-config --save-dev
   ```
   ou
   ```bash
   yarn add @edilando/eslint-config --dev
   ```

2. Após a instalação, o arquivo `.eslintrc.cjs` é automaticamente copiado para a raiz do seu projeto.

## Dependências
O pacote requer as seguintes bibliotecas:
- eslint
- eslint-config-prettier
- eslint-config-standard
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-n
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-react-hooks
- prettier
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint-plugin-react

Assegure-se de tê-las instaladas no seu projeto.

## Configuração
O arquivo `.eslintrc.cjs` incluído oferece configurações como:
- Ambiente de navegador, ES2021 e Jest
- Extensões recomendadas para React, TypeScript e Prettier
- Regras personalizadas para qualidade do código

Modifique `.eslintrc.cjs` conforme necessário para seu projeto.

## Problemas
Encontrou problemas ou bugs? Abra uma issue em [GitHub Issues](https://github.com/edilandosaturnino/eslint-config-edilandosaturnino/issues).

## Licença
Sob a licença MIT. Veja [LICENSE](LICENSE) para detalhes.

---

Autor: Edilando Saturnino <contato@edilando.com>