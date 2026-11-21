# Portfólio — Salomão Junior

Portfólio pessoal de página única, desenvolvido com Next.js App Router, React, TypeScript e Tailwind CSS. O conteúdo é demonstrativo e está separado da interface para facilitar a personalização.

## Requisitos

- Node.js 18.17 ou superior
- npm

## Instalação e execução

```bash
npm install
cp .env.example .env.local
```

Edite `.env.local` e informe o endereço de e-mail que receberá as mensagens. Em seguida:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para validar a versão de produção:

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

O formulário abre uma mensagem preenchida no aplicativo de e-mail do visitante; não há envio ou armazenamento de mensagens no servidor.

## Personalização

- Atualize nome, resumo, links e contato em `data/profile.ts`.
- Edite projetos, habilidades, formação, certificados e interesses em `data/`.
- Substitua as ilustrações em `public/images/` por imagens próprias.
- Tema escuro/claro fica salvo no navegador; o site inicia no tema escuro se ainda não houver preferência.
- A fonte Geist é servida pelo `next/font` para evitar requisições a serviços de fontes em tempo de execução.

## Deploy

O deploy recomendado é a [Vercel](https://vercel.com/): importe o repositório, mantenha os comandos padrão do Next.js e configure `NEXT_PUBLIC_CONTACT_EMAIL` nas variáveis de ambiente do projeto. Também é possível hospedar em qualquer plataforma que suporte `next build` e `next start`.
