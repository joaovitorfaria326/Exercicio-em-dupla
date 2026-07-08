/* ============================================================
   🎯 SEMANA 03 — VARIÁVEIS, TIPOS, OPERADORES E DOM
   Preparação para a SA · em DUPLA (piloto digita, copiloto confere;
   troquem a cada exercício!)
   ------------------------------------------------------------
   COMO RODAR: abra desafios.html, aperte F12 (Console), salve e F5.
   Cada exercício tem CONTEXTO, TAREFA, EXEMPLO (molde, não a
   resposta!), DICA e RESULTADO ESPERADO para se autocorrigir.

   📚 CONSULTA PERMITIDA (documentação oficial):
   - Variáveis (let/const): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let
   - Operadores: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators
   - typeof: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
   - Number(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number
   - DOM getElementById: https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById

   🚫 PROIBIDO pedir a resposta para IA. Na SA você estará sem ela.
   ============================================================ */


/* ═══ EXERCÍCIO 1 — 👋 O crachá do estagiário ═══
   CONTEXTO: primeiro dia de estágio em TI! O RH pediu seus dados
   para o crachá.
   TAREFA: crie as variáveis 'nome' (texto), 'idade' (número) e
   'bairro' (texto) com os SEUS dados e mostre os três no console.
   EXEMPLO (molde):
       let cidade = "São Paulo";
       console.log(cidade);
   DICA: texto vai entre aspas; número vai sem aspas.
   RESULTADO ESPERADO (exemplo): Duda / 19 / Santo Amaro */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 2 — 🚌 Recarga do bilhete único ═══
   CONTEXTO: você está no Terminal Santo Amaro com R$ 3,50 no
   bilhete e recarrega R$ 20.
   TAREFA: crie 'saldo' (3.50) e 'recarga' (20), some numa variável
   'saldoNovo' e mostre:  Saldo novo: R$ <valor>
   🧠 COMO PENSAR (antes de digitar):
      1º guardo o que EU TENHO (saldo)
      2º guardo o que ENTROU (recarga)
      3º crio uma variável NOVA com a soma das duas
      4º mostro juntando o texto "Saldo novo: R$ " com ela
   EXEMPLO: let total = a + b;
   DICA: decimal em JavaScript usa PONTO (3.50), não vírgula.
   RESULTADO ESPERADO: Saldo novo: R$ 23.5 */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 3 — 🍟 O troco do lanche ═══
   CONTEXTO: o combo na lanchonete do Largo 13 custa R$ 18 e você
   pagou com uma nota de R$ 50.
   TAREFA: calcule e mostre:  Troco: R$ <valor>
   DICA: subtração é o sinal de menos (-).
   RESULTADO ESPERADO: Troco: R$ 32 */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 4 — 🕵️ Texto que parece número ═══
   CONTEXTO: um formulário devolveu "18" (com aspas!) como preço.
   TAREFA: SEM RODAR, a dupla escreve a previsão nos comentários.
   Depois rode e confira:
       let preco = "18";
       console.log(preco + 2);
       console.log(typeof preco);
   PREVISÃO DA DUPLA: linha 1 = ______  linha 2 = ______
   DICA: aspas transformam qualquer coisa em texto — e texto GRUDA.
   RESULTADO ESPERADO: 182 / string */
let preco = "18";
console.log(preco + 2);
console.log(typeof preco);


/* ═══ EXERCÍCIO 5 — 🔧 Consertando com Number() ═══
   CONTEXTO: o "182" do exercício 4 está errado — era para ser 20.
   TAREFA: converta 'preco' com Number() e mostre a soma certa.
   EXEMPLO: let n = Number(textoQueEhNumero);
   RESULTADO ESPERADO: 20 */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 6 — 🎓 A média para passar ═══
   CONTEXTO: suas notas nas três atividades da UC09: 7, 9 e 6.
   TAREFA: calcule a média e mostre:  Média: <valor>
   DICA: soma dos três, dividida por 3 — e os PARÊNTESES importam:
         (a + b + c) / 3
   RESULTADO ESPERADO: Média: 7.333333333333333 */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 7 — 🍕 A pizza da vitória do Brasil ═══
   CONTEXTO: o Brasil ganhou na Copa 🇧🇷 e a galera pediu pizza de
   8 pedaços para comemorar. Vocês são 3 pessoas.
   TAREFA: use o operador % (resto da divisão) para descobrir
   quantos pedaços SOBRAM se cada um comer a mesma quantidade.
   Mostre:  Sobram <valor> pedaços
   EXEMPLO: console.log(10 % 4);  // 2 (10 dividido por 4 sobra 2)
   RESULTADO ESPERADO: Sobram 2 pedaços */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 8 — 🎂 Pode entrar no rolê? ═══
   CONTEXTO: o rolê de sábado é 18+.
   TAREFA: crie 'idadeRole' com um valor à escolha da dupla e mostre
   o resultado da comparação  idadeRole >= 18  (true/false).
   DICA: comparação DEVOLVE um valor — dá para mostrar direto.
   (Nome NOVO de propósito: 'idade' já nasceu no exercício 1, e um
   let só pode nascer UMA vez no arquivo!)
   RESULTADO ESPERADO: true (ou false, conforme a idade) */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 9 — 🪪 RG *E* dinheiro ═══
   CONTEXTO: para entrar no rolê precisa de RG E dinheiro da entrada.
   TAREFA: crie 'temRG' (true) e 'temDinheiro' (false) e mostre o
   resultado de  temRG && temDinheiro . Depois teste com || e
   compare: a dupla explica um para o outro a diferença.
   DICA: && = os DOIS precisam ser true; || = UM já basta.
   RESULTADO ESPERADO: false (com &&)  /  true (com ||) */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 10 — ⚽ Contador de gols ═══
   CONTEXTO: o Brasil fez mais um! 🥳
   TAREFA: crie 'gols' valendo 2 e aumente em 1 usando gols++
   (ou gols = gols + 1). Mostre antes e depois.
   RESULTADO ESPERADO: 2 / 3 */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 11 — 🔒 const × let ═══
   CONTEXTO: seu CPF não muda; seu saldo muda toda hora.
   TAREFA: SEM RODAR, preveja o que acontece no código abaixo.
   Depois descomente a última linha, rode, LEIAM o erro juntos
   e comentem de volta.
       const cpf = "111.222.333-44";
       let saldoBanco = 50;
       saldoBanco = 45;        // pode?
       // cpf = "000";         // pode?
   PREVISÃO DA DUPLA: ____________________
   RESULTADO ESPERADO: saldoBanco muda numa boa; cpf dá
   TypeError: Assignment to constant variable. */
const cpf = "111.222.333-44";
let saldoBanco = 50;
saldoBanco = 45;
console.log("saldoBanco mudou para", saldoBanco, "| cpf continua", cpf);
// cpf = "000";   // <- descomente, veja o erro, comente de volta


/* ═══ EXERCÍCIO 12 — 💬 A frase completa ═══
   CONTEXTO: monte sua apresentação de 1 linha para a entrevista.
   TAREFA: usando as variáveis do exercício 1, monte com + a frase:
   Meu nome é <nome>, tenho <idade> anos e moro em <bairro>.
   🧠 COMO PENSAR:
      1º as 3 variáveis JÁ EXISTEM (exercício 1) — não recrie nada
      2º a frase alterna: texto + variável + texto + variável...
      3º leiam em voz alta o que montaram e confiram os espaços
   DICA: cuidado com os espaços dentro das aspas: "Meu nome é ".
   RESULTADO ESPERADO (exemplo):
   Meu nome é Duda, tenho 19 anos e moro em Santo Amaro. */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 13 — 🖥️ Aparecer NA PÁGINA (DOM) ═══
   CONTEXTO: console é para dev; usuário vê a PÁGINA. Hora do DOM!
   O desafios.html tem um elemento com id="saida".
   TAREFA: escreva a frase do exercício 12 DENTRO da página.
   🧠 COMO PENSAR:
      1º acho o elemento pelo id ("saida")
      2º o texto que quero mostrar JÁ existe (a frase do ex. 12)
      3º .textContent = minha frase — pronto, está na página!
   EXEMPLO (molde):
       document.getElementById("umId").textContent = "um texto";
   RESULTADO ESPERADO: a frase aparece na caixa da página. */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 14 — ⌨️ Lendo o input ═══
   CONTEXTO: o usuário digita o nome dele — você lê.
   O desafios.html tem <input id="nomeInput"> e um botão id="btn".
   O clique já está ligado: quando apertarem o botão, a função
   'aoClicar' roda. COMPLETE a função:
   TAREFA: leia o valor do input e mostre na página (id="saida"):
   Bem-vindo(a), <valor digitado>!
   🧠 COMO PENSAR:
      1º pego o input pelo id ("nomeInput")
      2º o .value me dá o que a pessoa digitou
      3º monto a frase de boas-vindas com +
      4º escrevo no "saida" — exatamente como no ex. 13
   DICA: valor de input =  document.getElementById("nomeInput").value
   RESULTADO ESPERADO: digitou "Rebeca" e clicou → Bem-vindo(a), Rebeca! */
function aoClicar() {
  // ✍️ SOLUÇÃO DA DUPLA:

}
document.getElementById("btn").addEventListener("click", aoClicar);


/* ═══ EXERCÍCIO 15 — 🏆 DESAFIO DA DUPLA: rachando a pizza ═══
   CONTEXTO: pizza da vitória de novo 🍕 — agora com conta de verdade.
   A pizza custa R$ 60 e o refri R$ 12. Vocês são 4 amigos.
   TAREFA: calcule quanto cada um paga e mostre NO CONSOLE E NA
   PÁGINA (id="saida"):  Cada um paga: R$ <valor>
   🧠 COMO PENSAR:
      1º somo pizza + refri (o total da festa)
      2º divido o total pelo número de amigos
      3º mostro no console (console.log)
      4º repito a MESMA frase na página (ex. 13 de novo!)
   DICA: total primeiro, divisão depois — parênteses!
   BÔNUS para a dupla discutir: e se um amigo furar e virarem 3?
   RESULTADO ESPERADO: Cada um paga: R$ 18 */
// ✍️ SOLUÇÃO DA DUPLA:



/* ============================================================
   ✅ CHECKLIST FINAL DA DUPLA
   [ ] Todas as saídas batem com o resultado esperado?
   [ ] Os DOIS sabem explicar cada linha via código?
   [ ] Commit feito nos DOIS repositórios do GitHub?
        git add . && git commit -m "Semana 03 resolvida — dupla X & Y"
   ============================================================ */
