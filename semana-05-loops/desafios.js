/* ============================================================
   🎯 SEMANA 05 — LOOPS (while, do-while, for, for...of)
   Preparação para a SA · em DUPLA (troquem piloto/copiloto
   a cada exercício!)
   ------------------------------------------------------------
   COMO RODAR: abra desafios.html, aperte F12 (Console), salve e F5.
   ⚠️ CUIDADO ESPECIAL DESTA LISTA: loop sem incremento = loop
   infinito = aba travada. Se travar: feche a aba e conserte.

   📚 CONSULTA PERMITIDA (documentação oficial):
   - while: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
   - do...while: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while
   - for: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for
   - for...of: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
   - break/continue: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/break

   🚫 PROIBIDO pedir a resposta para IA. Na SA você estará sem ela.
   ============================================================ */


/* ═══ EXERCÍCIO 1 — ⚽ Contagem do pênalti ═══
   CONTEXTO: pênalti decisivo do Brasil na Copa! A torcida conta:
   3... 2... 1... GOL!
   TAREFA: use while para mostrar 3, 2, 1 e depois "⚽ GOOOOL!"
   EXEMPLO (molde):
       let n = 5;
       while (n > 0) {
         console.log(n);
         n--;
       }
   DICA: o n-- é quem impede o loop infinito. Nunca esqueça dele.
   RESULTADO ESPERADO: 3 / 2 / 1 / ⚽ GOOOOL! */
// ✍️ SOLUÇÃO DA DUPLA:
let n = 3;

while (n > 0) {
   console.log(n);
   n--;
}

console.log("⚽ GOOOOL!");



/* ═══ EXERCÍCIO 2 — 💰 Juntando grana para o rolê ═══
   CONTEXTO: o show custa R$ 120. Você guarda R$ 25 por semana.
   TAREFA: use while para somar semana a semana ATÉ dar (ou passar)
   120, mostrando "Semana <n>: R$ <guardado>". No fim:
   "🎫 Deu! Bora pro show!"
   🧠 COMO PENSAR:
      1º duas variáveis ANTES do loop: guardado (0) e semana (0)
      2º a condição do while: enquanto guardado < 120, continua
      3º DENTRO: semana sobe 1, guardado sobe 25, mostro a linha
      4º a mensagem do show fica FORA do loop (só quando ele acabar)
   DICA: duas variáveis — 'guardado' (soma) e 'semana' (conta).
   RESULTADO ESPERADO:
   Semana 1: R$ 25 ... Semana 5: R$ 125 / 🎫 Deu! Bora pro show! */
// ✍️ SOLUÇÃO DA DUPLA:
let guardado = 0;
let semana = 0;

while (guardado < 120) {
   semana++;
   guardado += 25;
   console.log(`Semana ${semana}: R$ ${guardado}`);
}
console.log("🎫 Deu! Bora pro show!");
/* ═══ EXERCÍCIO 3 — 🔐 A senha do wifi (do-while) ═══
   CONTEXTO: você tenta a senha do wifi da lanchonete ATÉ acertar —
   mas tenta pelo menos UMA vez, sempre.
   TAREFA: simule com do-while: 'tentativa' começa em 1; o loop
   roda enquanto tentativa <= 3, mostrando "Tentativa <n>...".
   Depois do loop: "🔓 Conectou!"
   DICA: do { ... } while (condição);  — o teste vem NO FIM,
   por isso roda pelo menos uma vez.
   RESULTADO ESPERADO: Tentativa 1... / 2... / 3... / 🔓 Conectou! */
// ✍️ SOLUÇÃO DA DUPLA:
let tentativa = 1;

do{
   console.log(`Tentativa ${tentativa}...`);
   tentativa++;
}while (tentativa <= 3);
console.log("🔓 Conectou!");

/* ═══ EXERCÍCIO 4 — 📣 A torcida no busão ═══
   CONTEXTO: a torcida voltando do jogo grita 5 vezes no 675P.
   TAREFA: use for para mostrar "Grito 1: BRASIL! 🇧🇷" até o 5.
   EXEMPLO (molde):
       for (let i = 1; i <= 3; i++) {
         console.log("volta " + i);
       }
   RESULTADO ESPERADO: Grito 1 ... Grito 5 (cinco linhas) */
// ✍️ SOLUÇÃO DA DUPLA:
for (let i = 1; i <= 5; i++) {
   console.log(`Grito ${i}: BRASIL! 🇧🇷`)
}


/* ═══ EXERCÍCIO 5 — ✖️ Tabuada do 7 ═══
   CONTEXTO: o clássico — mas agora quem escreve é o código.
   TAREFA: com for, mostre a tabuada do 7 de 1 a 10 no formato:
   7 x 1 = 7
   DICA: dentro do loop:  console.log("7 x " + i + " = " + (7 * i));
   RESULTADO ESPERADO: 10 linhas, de 7 x 1 = 7 até 7 x 10 = 70 */
// ✍️ SOLUÇÃO DA DUPLA:
for (let i = 1; i <=10; i++) {
   console.log("7 X " + i + " = " + (7 * i));
}


/* ═══ EXERCÍCIO 6 — 💸 Quanto foi a semana? ═══
   CONTEXTO: seus gastos da semana estão na lista abaixo
   (busão, lanche, açaí, recarga, rolê).
   TAREFA: some tudo com for (o padrão ACUMULADOR: total começa
   em 0) e mostre:  Total da semana: R$ <valor>  */
/* DICA: for (let i = 0; i < gastos.length; i++) { total = total + gastos[i]; }
   RESULTADO ESPERADO: Total da semana: R$ 85.8 */
// ✍️ SOLUÇÃO DA DUPLA:
let gastos = [8.8, 15, 12, 20, 30];
let total = 0;

for (let i = 0; i < gastos.length; i++) {
   total = total + gastos[i];
}
console.log("Total da semana: R$ " + total);

/* ═══ EXERCÍCIO 7 — 🍕 A lista da pizza (for...of) ═══
   CONTEXTO: convidados confirmados para a pizza da vitória: */
/* TAREFA: use for...of para mostrar "🍕 <nome> confirmou!"
   para cada um.
   EXEMPLO (molde):
       for (let item of lista) {
         console.log(item);
       }
   DICA: o for...of te dá o ITEM direto — sem [i], sem length.
   RESULTADO ESPERADO: 4 linhas de confirmação */
// ✍️ SOLUÇÃO DA DUPLA:
let convidados = ["Duda", "Rebeca", "João", "Vitor"];

for (let nome of convidados) {
   console.log("🍕 " + nome +  " confirmou!");
}
/* ═══ EXERCÍCIO 8 — 🎂 Quantos podem ir na balada? ═══
   CONTEXTO: as idades da galera: */
/* TAREFA: use for (ou for...of) + if para CONTAR quantos têm
   18 ou mais e mostre:  Liberados: <n> de 5
   🧠 COMO PENSAR:
      1º o contador nasce ANTES do loop, valendo 0
      2º o loop visita cada idade, uma por vez
      3º o if é o segurança: só deixa o ++ acontecer se >= 18
      4º o resultado só é mostrado DEPOIS do loop terminar
   DICA: padrão CONTADOR — 'liberados' começa em 0 e faz ++ só
   quando o if deixa.
   RESULTADO ESPERADO: Liberados: 3 de 5 */
// ✍️ SOLUÇÃO DA DUPLA:
let idades = [17, 19, 22, 16, 18];
let liberados = 0;

for (let idade of idades) {
   if (idade >= 18) {
      liberados++;
   }
}
console.log ("Liberados: " + liberados + " de " + idades.length); 

/* ═══ EXERCÍCIO 9 — 🎆 Réveillon na Paulista ═══
   CONTEXTO: contagem regressiva do ano novo!
   TAREFA: for DECRESCENTE de 10 até 1, depois "🎆 FELIZ ANO NOVO!"
   DICA: for (let i = 10; i >= 1; i--)
   RESULTADO ESPERADO: 10, 9, ..., 1, 🎆 FELIZ ANO NOVO! */
// ✍️ SOLUÇÃO DA DUPLA:
for (let i = 10; i >= 1; i--){
   console.log(i);
}
console.log("FELIZ ANO NOVO!");



/* ═══ EXERCÍCIO 10 — 🎓 A média da turma ═══
   CONTEXTO: as notas do grupo de estudos: */
/* TAREFA: some com for e divida pelo número de notas — use
   notas.length nas DUAS pontas (na condição e na divisão).
   Mostre:  Média da turma: <valor>
   DICA: use um acumulador com nome NOVO (ex.: soma) — o 'total'
   já nasceu no exercício 6, e um let só nasce uma vez!
   RESULTADO ESPERADO: Média da turma: 8 */
// ✍️ SOLUÇÃO DA DUPLA:
let notas = [7, 9, 6, 10, 8];
let soma = 0;
for (let nota of notas) {
   soma += nota;
}
console.log("Media da turma: " + (soma / notas.length));


/* ═══ EXERCÍCIO 11 — 🍕 Cardápio combinado (loop aninhado) ═══
   CONTEXTO: a pizzaria monta o cardápio combinando cada sabor
   com cada borda: */
/* TAREFA: use um for...of DENTRO de outro para mostrar TODAS as
   combinações:  "calabresa com borda de catupiry" ...
   🧠 COMO PENSAR:
      1º o loop de FORA pega UM sabor e segura ele
      2º para ESSE sabor, o de DENTRO passa por TODAS as bordas
      3º a frase usa as duas variáveis: sabor + " com borda de " + borda
      4º simulem no papel: quantas linhas vão sair? (3 × 2)
   DICA: o de fora anda nos sabores; o de dentro, nas bordas.
   RESULTADO ESPERADO: 6 combinações (3 x 2) */
// ✍️ SOLUÇÃO DA DUPLA:
let sabores = ["calabresa", "frango", "marguerita"];
let bordas = ["catupiry", "cheddar"];
for (let sabor of sabores) {
   for (let borda of bordas) {
      console.log(sabor + " com borda de " + borda);
   }
}

/* ═══ EXERCÍCIO 12 — 🚌 Achou, parou (break) ═══
   CONTEXTO: você procura o 675P no painel do terminal — quando
   acha, para de ler o painel. */
/* TAREFA: percorra com for...of; quando achar "675P", mostre
   "🚌 Achei o 675P!" e use break para parar. Mostre também
   "vendo: <linha>" a cada checagem, para PROVAR que parou.
   RESULTADO ESPERADO: vendo: 637P / vendo: 695X / 🚌 Achei o 675P!
   (746A e 709M NÃO aparecem) */
// ✍️ SOLUÇÃO DA DUPLA:
let listaOnibus = ["637P", "695X", "675P", "746A", "709M"];

for (let linha of listaOnibus) {
    if (linha === "675P") {
        console.log("🚌 Achei o 675P!");
        break;
    }
    console.log("vendo: " + linha);
}

/* ═══ EXERCÍCIO 13 — 🧾 Pulando os zerados (continue) ═══
   CONTEXTO: extrato do mês — dias sem gasto aparecem como 0 e
   não interessam. */
/* TAREFA: percorra com for...of; se o valor for 0, use continue
   para pular; senão mostre "gasto: R$ <valor>".
   DICA: continue = "pula ESTA volta e segue para a próxima".
   RESULTADO ESPERADO: gasto: R$ 12 / gasto: R$ 25 / gasto: R$ 8 */
// ✍️ SOLUÇÃO DA DUPLA:
let extrato = [12, 0, 25, 0, 8];
for (let valor of extrato) {
   if (valor === 0) {
      continue;
   }
   console.log("gasto: R$ " + valor);
}
/* ═══ EXERCÍCIO 14 — 🐛 CONSERTE o loop infinito ═══
   CONTEXTO: um colega escreveu isto e a aba dele TRAVOU:
       let fila = 5;
       while (fila > 0) {
         console.log("Faltam " + fila + " pessoas na fila do RG");
       }
   TAREFA: a dupla PRIMEIRO explica em voz alta por que trava
   (o que nunca muda?). Depois copie abaixo já consertado.
   DICA: alguma linha DENTRO do while precisa aproximar a
   condição do false.
   RESULTADO ESPERADO: Faltam 5... até Faltam 1... e o loop PARA. */
// ✍️ SOLUÇÃO DA DUPLA (a versão consertada):
let fila = 5;

while (fila > 0) {
   console.log("Faltam " + fila + " pessoas na fila do RG");
   fila--;
}

/* ═══ EXERCÍCIO 15 — 🏆 DESAFIO DA DUPLA: fechamento do caixa ═══
   CONTEXTO: sexta de jogo do Brasil, a lanchonete vendeu MUITO: */
/* TAREFA: com UM ÚNICO for, descubra e mostre:
   a) o total vendido               → Total: R$ 329
   b) a MAIOR venda do dia          → Maior venda: R$ 95
   🧠 COMO PENSAR:
      1º DOIS acumuladores antes do loop: totalVendas (soma) e
         maior (recorde) — nomes novos: 'total' já existe no ex. 6!
      2º dentro do MESMO for: somo SEMPRE; comparo SEMPRE
      3º o if do recorde: se a venda da vez bate o recorde, ela vira o novo
      4º os dois console.log ficam DEPOIS do loop
   DICA para o (b): guarde 'maior' começando em 0; dentro do
   loop, if (vendas[i] > maior) { maior = vendas[i]; }
   BÔNUS para discutir: por que 'maior' começa em 0 e não em 100?
   RESULTADO ESPERADO: Total: R$ 329 / Maior venda: R$ 95 */
// ✍️ SOLUÇÃO DA DUPLA:
let vendas = [35, 80, 12, 95, 47, 60];
let totalVendas = 0;
let maiorVenda = 0;

for (let i = 0; i < vendas.length; i++) {
   totalVendas += vendas[i];

   if (vendas[i] > maiorVenda) {
      maiorVenda = vendas[i];
   }
}
console.log("Total: R$ " + totalVendas);
console.log("Maior venda: R$ " + maiorVenda);

/* ============================================================
   ✅ CHECKLIST FINAL DA DUPLA
   [✅] Todas as saídas batem com o resultado esperado?
   [✅] Os DOIS sabem apontar, em cada loop, quem impede o infinito?
   [✅] Commit nos DOIS GitHubs:
        git commit -m "Semana 05 resolvida — dupla X & Y"
   ============================================================ */
