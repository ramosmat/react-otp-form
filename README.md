# Formulário de Autenticação em 2 fatores - React

É crescente o uso de aplicações que implementam algum tipo de segurança adicional na autenticação. Uma das formas mais comuns para isso é utilizando uma estratégia de 2 fatores. Além da senha tradicional, o usuário recebe em seu e-mail ou por SMS uma senha de uso único (também conhecida como OTP - One-Time Password).

## 🔨 Requisitos

- Crie um formulário com 5 campos de entrada, cada um representando um dígito da senha OTP.
- A submissão desse formulário deverá ocorrer quando o usuário pressionar a tecla Enter ou clicar no botão de submissão.
- Os campos de entrada só poderão aceitar números, permitindo apenas um único dígito em cada.
- Ao carregar a página, a aplicação deverá focar no primeiro campo de dígito.
- Ao digitar no primeiro campo, o foco deve ser transferido automaticamente para o segundo campo, e assim sucessivamente.
- Se algum dígito for apagado, o foco deve retornar para o dígito anterior.
- Deve ser possível colar um código de 5 dígitos e ele deve aparecer corretamente nos campos de entrada.
  - Um erro deve ser exibido quando o texto colado não possuir 5 dígitos numéricos.
- A navegação entre os campos deve ser possível utilizando as setas do teclado (ArrowLeft e ArrowRight).
- Em dispositivos móveis, o teclado numérico deve ser ativado (ao invés do teclado tradicional).
- Utilize, sempre que possível, as boas práticas descritas [nesse artigo](https://web.dev/articles/sms-otp-form?hl=pt-br).  
- Desenvolva a interface de usuário conforme o modelo do Figma ou, se preferir, crie um design personalizado. 

## 🎨 Design Sugerido

Temos uma sugestão de design no Figma. Entretanto, fique à vontade para montar a aplicação conforme a sua criatividade.

### Figma

🔗 [Link do design](https://www.figma.com/community/file/1344076293376163434/mini-projeto-formulario-de-autenticacao-em-2-fatores-otp)

## 👉🏽 O que você irá praticar:

#### React

- Refs no React
- Formulários controlados no React
- Eventos

#### WebOTP API

- Melhores práticas no uso da WebOTP API
- Inputs com teclados numéricos


## Pré requisitos

Para fazer esse Mini Projeto será necessário no mínimo conhecimento básico de React e de desenvolvimento web no geral.
