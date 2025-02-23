
# Gerenciador de Tarefas com React e Tailwind CSS 

[![Live Demo](https://img.shields.io/badge/Demo-▶️-2ea44f?style=for-the-badge)](https://seu-deploy.com)
![](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

Aplicação moderna para gerenciamento de tarefas, desenvolvida com React e estilizada com Tailwind CSS. Ideal para organizar suas atividades diárias!

---

## Funcionalidades 
- **CRUD Completo**: Adicione, edite, marque como concluída e exclua tarefas
- **Persistência de Dados**: Armazenamento local via LocalStorage
- **Interface Dinâmica**: 
  - Renderização condicional de elementos
  - Navegação entre páginas com React Router
  - Detalhes individuais para cada tarefa
- **Validações**: Formulários com feedback visual
- **Componentes Reutilizáveis**: 
  - Botões estilizados
  - Inputs com tratamento de erros
  - Títulos personalizáveis

---

## Tecnologias Chave 
- **React**: Componentização, Estado (useState), Efeitos (useEffect)
- **Tailwind CSS**: Estilização utilitária responsiva
- **React Router**: Navegação SPA e rotas dinâmicas
- **LocalStorage**: Persistência de dados no navegador

---

## Como Usar 
```bash

# Clone o repositório
git clone https://github.com/alexcristofari/task-manager.git

# Instale as dependências
npm install

# Inicie o servidor
npm run dev

 ```

## Conceitos Implementados 
1. **Gerenciamento de Estado**  
   - Controle dinâmico da lista de tarefas com `useState`  
   - Atualizações imutáveis para eficiência de renderização  

2. **Comunicação entre Componentes**  
   - Passagem de props e callbacks entre pais/filhos  
   - Composição reutilizável de UI  

3. **Padrões de Projeto**  
   - Componentes controlados para formulários  
   - Isolamento de lógica em hooks customizados  

4. **Otimizações**  
   - Keys únicas em listas renderizadas  
   - Debounce em inputs de pesquisa  

5. **Estilização Avançada**  
   - Classes Tailwind condicionais  
   - Animações em transições de estado  
   - Modo escuro dinâmico  

## Personalização  
Edite `tailwind.config.js` para:  
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6',
        'secondary': '#10B981'
      }
    }
  }
}

 ```
## Próximas Features 
Autenticação JWT

Sincronização com API

Tags/categorias

Exportação de dados

**Desenvolvido com React + Tailwind CSS**  
[🔗 Repositório](https://github.com/seu-usuario) | [📂 Documentação](#)
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

