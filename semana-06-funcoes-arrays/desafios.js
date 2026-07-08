/* ============================================================
   🎯 SEMANA 06 — FUNÇÕES, ARROW, ESCOPO E ARRAYS
   Preparação para a SA · em DUPLA (troquem piloto/copiloto
   a cada exercício!)
   ------------------------------------------------------------
   COMO RODAR: abra desafios.html, aperte F12 (Console), salve e F5.
   REGRA DE OURO: criar uma função NÃO a executa — chame: nome();

   📚 CONSULTA PERMITIDA (documentação oficial):
   - Funções: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions
   - Arrow functions: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
   - return: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/return
   - Arrays: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
   - push/pop: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   - includes: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

   🚫 PROIBIDO pedir a resposta para IA. Na SA você estará sem ela.
   ============================================================ */


/* ═══ EXERCÍCIO 1 — 📢 A vinheta da rádio ═══
   CONTEXTO: toda hora cheia, a rádio da lanchonete toca a vinheta.
   TAREFA: crie a função 'vinheta' que mostra
   "📻 Você ouve a Rádio Largo 13!" e chame TRÊS vezes.
   EXEMPLO (molde):
       function tocar() { console.log("♪"); }
       tocar();
   DICA: criou e não apareceu nada? Faltou CHAMAR.
   RESULTADO ESPERADO: a frase 3 vezes */
// ✍️ SOLUÇÃO DA DUPLA:
function vinheta() {
   console.log("📻 Você ouve a Rádio Largo 13!");
}
vinheta();
vinheta();
vinheta();

/* ═══ EXERCÍCIO 2 — 🎤 Chamando a galera pelo nome ═══
   CONTEXTO: o MC do rolê chama cada um pelo nome.
   TAREFA: crie 'chamar(nome)' que mostra "🎤 Sobe aí, <nome>!"
   e chame com dois nomes diferentes.
   DICA: o parâmetro é a ENTRADA — cada chamada, um valor.
   RESULTADO ESPERADO: 🎤 Sobe aí, Duda! / 🎤 Sobe aí, João! */
// ✍️ SOLUÇÃO DA DUPLA:
function chamar(nome) {
   console.log("Sobe aí, " + nome + "!")
}
chamar("Duda");
chamar("João");
/* ═══ EXERCÍCIO 3 — 💵 O dobro do cachê ═══
   CONTEXTO: seu primeiro freela de site pagou X; o segundo
   cliente pagou o DOBRO.
   TAREFA: crie 'dobro(valor)' que RETORNA valor * 2. Guarde
   dobro(150) numa variável e mostre.
   DICA: return DEVOLVE (não mostra) — quem mostra é o console.log
   de quem chamou.
   RESULTADO ESPERADO: 300 */
// ✍️ SOLUÇÃO DA DUPLA:
function dobro(valor) {
   return valor * 2;
}
let resultado = dobro(150);
console.log(resultado);
 



/* ═══ EXERCÍCIO 4 — 🍕 Rachando a conta (2 parâmetros) ═══
   CONTEXTO: pizza + refri, dividido entre a galera.
   TAREFA: crie 'rachar(valorTotal, pessoas)' que RETORNA a divisão.
   Mostre rachar(72, 4).
   RESULTADO ESPERADO: 18 */
// ✍️ SOLUÇÃO DA DUPLA:
function rachar(valorTotal, pessoas) {
   return valorTotal / pessoas;
}
console.log(rachar(72, 4));

/* ═══ EXERCÍCIO 5 — 🏹 A versão arrow ═══
   CONTEXTO: no trampo você vai ver MUITO essa sintaxe curta.
   TAREFA: reescreva o 'dobro' do exercício 3 como arrow function
   com o nome 'dobroSeta' e mostre dobroSeta(21).
   EXEMPLO (molde):
       const triplo = (n) => n * 3;
   DICA: nome NOVO de propósito — redeclarar 'dobro' dá erro.
   RESULTADO ESPERADO: 42 */
// ✍️ SOLUÇÃO DA DUPLA:
    const dobroSeta = (valor) => valor * 2;
console.log(dobroSeta(21));

/* ═══ EXERCÍCIO 6 — 👋 Parâmetro padrão ═══
   CONTEXTO: o sistema de cadastro saúda o usuário — e quando
   ninguém fez login, saúda "visitante".
   TAREFA: crie 'saudar(nome = "visitante")' que mostra
   "Bem-vindo(a), <nome>!". Chame SEM argumento e com "Rebeca".
   RESULTADO ESPERADO:
   Bem-vindo(a), visitante! / Bem-vindo(a), Rebeca! */
// ✍️ SOLUÇÃO DA DUPLA:
let nome = "visitante!"
function saudar(nome){
   console.log(`Bem-vindo(a), ${nome}`)
}
saudar(nome)
saudar("Rebeca!")
/* ═══ EXERCÍCIO 7 — 🔭 Escopo: onde a variável vive ═══
   CONTEXTO: clássico de entrevista técnica!
   TAREFA: SEM RODAR, a dupla preveja o que acontece. Depois
   descomente a última linha, rode, leiam o erro e comentem de volta.
       function calcularCache() {
         let cache = 500;      // nasceu DENTRO da função
         console.log("dentro: " + cache);
       }
       calcularCache();
       // console.log("fora: " + cache);
   PREVISÃO DA DUPLA: ____________________
   DICA: variável de dentro só vive lá dentro (escopo local).
   RESULTADO ESPERADO: "dentro: 500" funciona; a linha de fora dá
   ReferenceError: cache is not defined */
function calcularCache() {
  let cache = 500;
  console.log("fora: " + cache);
}
calcularCache();
// console.log("fora: " + cache);   // <- descomente, veja, comente



/* ═══ EXERCÍCIO 8 — 🗳️ Pode votar? ═══
   CONTEXTO: título de eleitor sai aos 16; voto obrigatório aos 18.
   TAREFA: crie 'situacaoVoto(idade)' que RETORNA:
   idade >= 18 → "Voto obrigatório" · idade >= 16 → "Voto opcional"
   senão → "Ainda não vota". Mostre com 15, 17 e 20.
   🧠 COMO PENSAR:
      1º dentro da função, testo do MAIOR para o menor (18, depois 16)
      2º cada caminho tem o SEU return — quem retorna, sai
      3º quem mostra é o console.log de FORA, com cada idade
   DICA: if / else if / else DENTRO da função, com return em cada.
   RESULTADO ESPERADO: Ainda não vota / Voto opcional / Voto obrigatório */
// ✍️ SOLUÇÃO DA DUPLA:
function situacaoVoto(idade) {
   if (idade >= 18) {
      return "Voto obrigatorio";
   } else if (idade >= 16) {
      return "Voto opcional";
   } else {
      return "Ainda não vota";
   }
}
console.log(situacaoVoto(15))
console.log(situacaoVoto(17))
console.log(situacaoVoto(20))
/* ═══ EXERCÍCIO 9 — 📋 O corre da semana (array básico) ═══
   CONTEXTO: sua agenda da semana num array.
   TAREFA: crie o array 'corre' com ["aula", "estágio", "academia",
   "freela"] e mostre: o PRIMEIRO item, o ÚLTIMO (usando length!)
   e quantos itens tem.
   DICA: último =  corre[corre.length - 1]
   RESULTADO ESPERADO: aula / freela / 4 */
// ✍️ SOLUÇÃO DA DUPLA:
const corre = ["aula", "estagio", "academia", "freela"];

console.log(corre[0]);
console.log(corre[corre.length - 1]);
console.log(corre.length);

/* ═══ EXERCÍCIO 10 — 🛒 A lista da feira (push/pop) ═══
   CONTEXTO: feira de domingo em Santo Amaro.
   TAREFA: comece com ["banana", "tomate"]; adicione "pastel" 😋 e
   "caldo de cana" com push; a grana acabou — remova o último com
   pop; mostre a lista final.
   RESULTADO ESPERADO: ["banana", "tomate", "pastel"] */
// ✍️ SOLUÇÃO DA DUPLA:
let feira = ["banana", "tomate"];
feira.push("pastel", "caldo de cana");

feira.pop();
console.log(feira);

/* ═══ EXERCÍCIO 11 — 🔍 Tem pastel? (includes) ═══
   CONTEXTO: conferindo a lista antes de sair de casa.
   TAREFA: na sua lista do exercício 10, use includes para testar
   se "pastel" está na lista e se "picanha" está. Mostre os dois.
   EXEMPLO (molde):  lista.includes("item")  → true/false
   RESULTADO ESPERADO: true / false */
// ✍️ SOLUÇÃO DA DUPLA:
let minhaLista = ["pão", "leite", "pastel", "café"];

console.log("Tem pastel?", minhaLista.includes("pastel"));
console.log("Tem picanha?", minhaLista.includes("picanha")); 



/* ═══ EXERCÍCIO 12 — 🧮 Função que soma lista ═══
   CONTEXTO: o padrão que você usará a carreira inteira: função
   que recebe um array e devolve um resultado.
   TAREFA: crie 'somarLista(numeros)' que percorre com for e
   RETORNA a soma. Mostre somarLista([10, 20, 30]) e também
   com os seus gastos [8.8, 15, 12].
   🧠 COMO PENSAR:
      1º o acumulador nasce DENTRO da função:  let total = 0;
      2º o for soma cada  numeros[i]  no total
      3º o return total vem DEPOIS do for (fora dele!)
      4º o console.log fica FORA da função, mostrando a chamada
   DICA: acumulador dentro, return no fim, console.log fora.
   RESULTADO ESPERADO: 60 / 35.8 */
// ✍️ SOLUÇÃO DA DUPLA:
function somarLista(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    return total;
}

console.log(somarLista([10, 20, 30])); 
console.log(somarLista([8.8, 15, 12])); 

/* ═══ EXERCÍCIO 13 — 🎓 Contando aprovados ═══
   CONTEXTO: as notas da turma saíram: */
let notasTurma = [8, 4, 7, 9, 5, 10];
/* TAREFA: crie 'contarAprovados(notas)' que RETORNA quantas
   notas são >= 7. Mostre com notasTurma.
   🧠 COMO PENSAR:
      1º é o somarLista do ex. 12 — só que o acumulador é um CONTADOR
      2º o if é o filtro: o ++ só acontece se a nota for >= 7
      3º return do contador no fim; console.log fora
   DICA: contador + for + if — tudo DENTRO da função.
   RESULTADO ESPERADO: 4 */
// ✍️ SOLUÇÃO DA DUPLA:
function contarAprovados(notas) {
    let contador = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 7) {
            contador++;
        }
    }
    return contador;
}

console.log(contarAprovados(notasTurma)); // 4

/* ═══ EXERCÍCIO 14 — 📣 Função + for...of ═══
   CONTEXTO: o professor faz a chamada da TI116.
   TAREFA: crie 'fazerChamada(lista)' que mostra
   "✅ <nome> presente!" para cada nome, usando for...of.
   Chame com ["Duda", "Rebeca", "Vitor"].
   RESULTADO ESPERADO: 3 linhas de presença */
// ✍️ SOLUÇÃO DA DUPLA:
function fazerChamada(lista) {
    for (let nome of lista) {
        console.log(`✅ ${nome} presente!`);
    }
}

fazerChamada(["Duda", "Rebeca", "Vitor"]);

/* ═══ EXERCÍCIO 15 — 🏆 DESAFIO DA DUPLA: o caixa completo ═══
   CONTEXTO: fim do expediente na lanchonete. As vendas: */
let vendasDia = [35, 80, 12, 95, 47];
/* TAREFA: crie 'fecharCaixa(vendas)' que:
   a) soma o total com for
   b) encontra a maior venda
   c) RETORNA a frase:
      "Caixa: R$ <total> | Maior venda: R$ <maior>"
   Guarde o retorno numa variável e mostre.
   🧠 COMO PENSAR:
      1º a LÓGICA vocês já têm: é o ex. 15 da semana 05 (total + maior)
      2º a novidade é EMBALAR numa função que recebe 'vendas'
      3º em vez de dois console.log, montem UMA frase e retornem
      4º fora: guardem o retorno numa variável e mostrem
   DICA: é o exercício 15 da semana 05 — agora EMBALADO numa
   função reutilizável. Teste também com outro array!
   RESULTADO ESPERADO: Caixa: R$ 269 | Maior venda: R$ 95 */
// ✍️ SOLUÇÃO DA DUPLA:
function fecharCaixa(vendas) {
    let total = 0;
    let maior = vendas[0];
    
    for (let i = 0; i < vendas.length; i++) {
        total += vendas[i];
        if (vendas[i] > maior) {
            maior = vendas[i];
        }
    }
    
    return `Caixa: R$ ${total} | Maior venda: R$ ${maior}`;
}

let resumo = fecharCaixa(vendasDia);
console.log(resumo);


/* ============================================================
   ✅ CHECKLIST FINAL DA DUPLA
   [✅] Todas as saídas batem com o resultado esperado?
   [✅] Os DOIS sabem explicar a diferença entre return e console.log?
   [✅] Commit nos DOIS GitHubs:
        git commit -m "Semana 06 resolvida — dupla X & Y"
   ============================================================ */
