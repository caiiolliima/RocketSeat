###
1. Entidades de Domínio (essência do negócio)
Entidade	Responsabilidade principal	Principais atributos
Produto (Aggregate Root)	Identifica e descreve o item comercializado.	idSKU, nome, descricao, categoria, tamanho, cor, preçoUnitário
Estoque	Representa o saldo atual e a movimentação de cada produto.	produtoId, quantidadeAtual, quantidadeMinima, localizacao
Movimentação de Estoque	Registra entradas/saídas de um produto.	movId, produtoId, tipo (entrada/saída/ajuste), quantidade, data, origem
Alerta	Dispara notificações quando o estoque cai abaixo do mínimo.	alertaId, produtoId, quantidadeAtual, canal (e-mail, in-app), status
Venda	Fatos de venda utilizados para relatórios.	vendaId, produtoId, quantidadeVendida, preçoUnitário, dataVenda, lucro
Histórico de Estoque (View/Projeção)	Série temporal das quantidades ao longo do tempo—base p/ relatórios.	produtoId, data, quantidade
Ordem de Compra	Solicitação automática ou manual de reposição.	ordemId, fornecedorId, itens[], status, dataEmissao, dataEntregaPrevista
Fornecedor	Contém dados e integrações de parceiros de reposição.	fornecedorId, nome, contato, leadTime, canalIntegracao
###

###
1. Ações / Casos de Uso (Application Layer)
Caso de Uso	Descrição resumida	Atores
RegistrarProduto	Criar um novo produto com SKU único e metadados (tamanho, cor, etc.).	Colaborador
AtualizarProduto	Editar detalhes (ex.: descrição, atributos, preço).	Colaborador
RegistrarMovimentacao	Dar entrada ou baixa em estoque (compra, venda, ajuste).	Sistema / Colaborador
DefinirQuantidadeMinima	Configurar o nível mínimo de cada produto.	Gestor de Estoque
GerarAlertaEstoqueBaixo	Detectar estoque < mínimo e criar alerta.	Serviço de Domínio
NotificarAlerta	Enviar e-mail e/ou notificação in-app ao responsável.	Serv. Notificação
ConsultarHistoricoVendas	Exibir vendas por período, lucro por produto, top-sellers.	Analista / Gestor
ConsultarHistoricoEstoque	Mostrar tendência de estoque ao longo do tempo.	Analista / Gestor
GerarRelatorioDesempenho	Combina histórico de vendas e estoque para apoio à decisão de compra.	Gestor
CriarOrdemCompraAutomatica	Baseado em estoque mínimo + tendências, gera OC para fornecedor.	Serviço de Domínio
GerenciarOrdemCompra	Atualizar status, acompanhar entregas, registrar recebimento.	Gestor / Sistema
AtualizarStatusEntregaFornecedor	Sincroniza prazos/atrasos via integração com fornecedor.	Integração Externa
###