import Document, { Head, Main, NextScript, Html } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="logo192.png" />
          <link rel="manifest" href="manifest.json" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Faça seu orçamento, planejamento tributário e veja qual a melhor opção para sua empresa" />
          <meta name="google-site-verification" content="QxhMy-iJdDXmhI-_jrR7AIq2VuJyAEkshTyyMlvyh78" />
          <meta name="og:title" property="og:title" content="LFM | Contabilidade que funciona para você" />
          <link rel="canonical" href="https://www.lfmcontabilidade.com.br/" />
          <meta name="robots" content="index, nofollow" />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="keywords" content="contas a pagar, controle financeiro, contabilidade, departamento pessoal, financeiro, contador, contabilidade comercial, contabilidade fiscal, contabilidade geral, contabilidade financeira" />
          <meta name="author" content="Luismar Pinheiro" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}