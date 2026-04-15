# Boletim ZeroUm – v1.0  
📅 Publicado em: Janeiro de 2024

---

## Objetivo deste boletim

Este documento apresenta melhorias padrão que foram disponibilizadas no **VendaAI** com foco em facilitar o uso e oferecer mais recursos operacionais aos usuários. As funcionalidades aqui listadas podem ser ativadas diretamente com o suporte técnico.

---

## Melhorias de Produto Padrão

As melhorias abaixo foram aplicadas e estão disponíveis para habilitação sob demanda. Todas passam por validação junto ao time de suporte e testes antes da ativação definitiva.

### 1. Combos e Kits

Agrupe produtos em pacotes com preços promocionais para incentivar vendas combinadas.  
> **Menu:** Registros → Produtos → Produtos Kits

Inclua imagens, descrições e componentes que formam o combo.  
Ideal para aumentar o ticket médio e destacar conjuntos de produtos.

![Combos e Kits](https://i.imgur.com/kFzU9BV.png)

---

### 2. Produtos Relacionados e Complementares

Permite criar vínculos entre produtos semelhantes ou que se complementam.  
> **Menu:** Painel de Produtos → Aba Produtos Relacionados

Facilita sugestões automáticas, melhora a navegação e pode aumentar o volume de itens por pedido.

![Produtos Relacionados](https://i.imgur.com/WVE4FiA.png)

---

### 3. Produtos Encomenda (Reserva de Estoque)

Permite reservar produtos no estoque para um orçamento específico antes da finalização do pedido.  
> **Menu:** Vendas → Ações (no orçamento) → Reservar Estoque

O produto fica marcado com status **ENCOMENDA**, impedindo que seja vendido para outro cliente.

![Produtos Encomenda](https://i.imgur.com/yaD2TGr.png)

---

### 4. Avise Quando Chegar

Permite que o cliente receba um e-mail quando o produto, anteriormente sem estoque, estiver novamente disponível.

![Avise-me](https://i.imgur.com/RB5vWGd.png)

---

### 5. Habilitar Manutenção de Integrações

Quando há manutenção no ERP, essa opção exibe automaticamente um aviso para os usuários, bloqueando integrações temporariamente.

> **Menu:** Configurações → Habilitar manutenção de integrações

A mensagem pode ser personalizada conforme o estilo de comunicação da empresa.

![Manutenção Integrações](https://i.imgur.com/YhrJUtq.png)

---

## Correções e Ajustes Técnicos

### 1. Descrição dos Itens no E-commerce

Corrigido o campo de origem das descrições dos produtos no e-commerce.  
Agora o sistema utiliza corretamente o campo `NAME`, evitando erros e confusão na visualização.

---

### 2. E-mails Duplicados

Correção no processo de envio de e-mails de pedidos quando o cliente não possui e-mail cadastrado.  
Evita reenvios contínuos para o vendedor.

---

### 3. Caracteres Especiais no Protheus

Implementado tratamento para acentuação e caracteres especiais, prevenindo falhas em relatórios e visualizações.

---

## Aprovadores

| Nome do Aprovador  | Função               | Data       |
|--------------------|----------------------|------------|
| Chrystian Batista  | Fábrica de Software  | 01/06/2025 |
| Thiago Teixeira    | QA                   | 01/06/2025 |
| Henrique Sciasco   | Gestão Suporte       | 01/06/2025 |