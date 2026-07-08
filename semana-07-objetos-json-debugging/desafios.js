/* ============================================================
   🎯 SEMANA 07 — OBJETOS, JSON, LOCALSTORAGE, BUGS E TRY/CATCH
   Preparação para a SA · em DUPLA (troquem piloto/copiloto
   a cada exercício!)
   ------------------------------------------------------------
   COMO RODAR: abra desafios.html, aperte F12 (Console), salve e F5.
   ⚠️ Os exercícios de localStorage dependem do estado do navegador:
   para zerar tudo, rode  localStorage.clear()  no Console e F5.

   📚 CONSULTA PERMITIDA (documentação oficial):
   - Objetos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects
   - JSON.stringify: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
   - JSON.parse: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
   - localStorage: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage
   - try...catch: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch
   - Erros comuns: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors

   🚫 PROIBIDO pedir a resposta para IA. Na SA você estará sem ela.
   ============================================================ */


/* ═══ EXERCÍCIO 1 — 👤 O perfil do dev júnior ═══
   CONTEXTO: montando seu perfil para a primeira vaga em TI.
   TAREFA: crie o objeto 'dev' com nome, idade e bairro (seus
   dados) e mostre os três com o ponto.
   EXEMPLO (molde):
       let curso = { nome: "TI", unidade: "Largo Treze" };
       console.log(curso.nome);
   RESULTADO ESPERADO (exemplo): Duda / 19 / Santo Amaro */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 2 — 🎉 Conseguiu o estágio! ═══
   CONTEXTO: a vaga saiu! Seu perfil ganha novos dados.
   TAREFA: no objeto 'dev': TROQUE nada, mas ADICIONE (depois de
   criado, com o ponto) as propriedades  empresa: "TechSA"  e
   bolsa: 1200 . Mostre as duas.
   DICA: objeto.novaPropriedade = valor;
   RESULTADO ESPERADO: TechSA / 1200 */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 3 — 🎤 Elevator pitch (objeto + função) ═══
   CONTEXTO: apresentar-se em 1 frase na entrevista.
   TAREFA: crie 'apresentar(p)' que recebe o objeto INTEIRO e
   RETORNA: "Sou <nome>, de <bairro>, dev em formação!"
   Mostre apresentar(dev).
   DICA: dentro da função, leia com p.nome / p.bairro.
   RESULTADO ESPERADO (exemplo):
   Sou Duda, de Santo Amaro, dev em formação! */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 4 — 🍕 O carrinho da pizza (array de objetos) ═══
   CONTEXTO: o Brasil ganhou 🇧🇷 e o pedido no app ficou assim: */
let carrinho = [
  { item: "Pizza calabresa", preco: 60 },
  { item: "Refri 2L", preco: 12 },
  { item: "Borda catupiry", preco: 8 }
];
/* TAREFA: some os preços com for (ou for...of) e mostre:
   Total do pedido: R$ <valor>
   DICA: o preço de cada posição é  carrinho[i].preco
   RESULTADO ESPERADO: Total do pedido: R$ 80 */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 5 — 📦 Objeto vira texto (stringify) ═══
   CONTEXTO: para VIAJAR pela internet (ou ser salvo), o objeto
   vira texto — é o JSON que todo app troca com o servidor.
   TAREFA: transforme seu objeto 'dev' em texto com
   JSON.stringify e mostre.
   RESULTADO ESPERADO (exemplo):
   {"nome":"Duda","idade":19,"bairro":"Santo Amaro","empresa":"TechSA","bolsa":1200} */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 6 — 📬 Texto vira objeto (parse) ═══
   CONTEXTO: a resposta da API de vagas chegou como texto: */
let respostaAPI = '{"vaga":"Dev Júnior","salario":2200,"local":"Santo Amaro"}';
/* TAREFA: use JSON.parse para virar objeto e mostre:
   "💼 <vaga> em <local> — R$ <salario>"
   DICA: no TEXTO o ponto não funciona; no OBJETO, sim.
   RESULTADO ESPERADO: 💼 Dev Júnior em Santo Amaro — R$ 2200 */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 7 — 💾 Sobrevivendo ao F5 (setItem/getItem) ═══
   CONTEXTO: até hoje tudo que vocês fizeram morria no F5. Acabou.
   TAREFA: guarde seu nome com
   localStorage.setItem("nome", "<seu nome>"), leia com getItem
   e mostre. Depois: APERTE F5 TRÊS VEZES e vejam continuar lá.
   RESULTADO ESPERADO: seu nome — mesmo depois do F5! 🤯 */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 8 — 💾 O objeto que não morre ═══
   CONTEXTO: agora o perfil INTEIRO vai sobreviver.
   TAREFA: guarde o objeto 'dev' no localStorage (chave "dev") e
   leia de volta. Mostre a empresa do objeto que VOLTOU.
   🧠 COMO PENSAR:
      1º o localStorage só aceita TEXTO → stringify antes de guardar
      2º o getItem devolve TEXTO → parse para virar objeto de novo
      3º só DEPOIS do parse o ponto (.empresa) volta a funcionar
   DICA: o par que você vai usar a carreira toda:
         GUARDAR: setItem + JSON.stringify
         LER:     getItem + JSON.parse
   RESULTADO ESPERADO: TechSA */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 9 — 🕳️ null: a chave que não existe ═══
   CONTEXTO: clássico de bug silencioso (e de entrevista!).
   TAREFA: SEM RODAR, preveja as duas linhas. Depois rode:
       console.log(localStorage.getItem("dev"));
       console.log(localStorage.getItem("chaveFantasma"));
   PREVISÃO DA DUPLA: linha 1 = ______  linha 2 = ______
   DICA: chave inexistente NÃO dá erro — devolve null.
   (Apareceu null nas DUAS linhas? É porque vocês ainda não fizeram
   o exercício 8 — ele é quem guarda a chave "dev". Voltem lá!)
   RESULTADO ESPERADO: o texto JSON do dev  /  null */
console.log(localStorage.getItem("dev"));
console.log(localStorage.getItem("chaveFantasma"));


/* ═══ EXERCÍCIO 10 — 🔢 O contador de visitas ═══
   CONTEXTO: todo site tem um. Agora o de vocês também.
   TAREFA: leia a chave "visitas" convertendo com Number();
   some 1; guarde de volta; mostre "Visita nº <n>".
   APERTEM F5 cinco vezes e contem juntos! 🎉
   🧠 COMO PENSAR (o ciclo completo, em 4 passos):
      1º LEIO o que está guardado (vem texto — ou null na 1ª vez)
      2º CONVERTO com Number() (null vira 0, que sorte!)
      3º SOMO 1
      4º GUARDO DE VOLTA — sem este passo, o F5 esquece tudo!
   DICA: Number(null) vale 0 — a primeira visita já funciona.
   RESULTADO ESPERADO: Visita nº 1, e crescendo a cada F5 */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 11 — 🐛 CONSERTE: o erro que grita ═══
   CONTEXTO: um estagiário deixou esse código quebrado. Descomente,
   LEIAM a mensagem juntos (nome do erro / o quê / linha) e consertem.
   RESULTADO ESPERADO: 🎮 Bora jogar, Vitor! */
// console.log("🎮 Bora jogar, " + nomeJogador + "!");
// ✍️ SOLUÇÃO DA DUPLA (o conserto vem ANTES da linha acima):


/* ═══ EXERCÍCIO 12 — 🐛 CONSERTE: o bug mudo ═══
   CONTEXTO: a vaquinha da pizza está dando um número maluco —
   e NENHUM erro apareceu. (Dica de detetive: typeof!)
   RESULTADO ESPERADO: Vaquinha: R$ 90 */
let parte1 = "50";   // veio de um input — desconfie!
let parte2 = 40;
let vaquinha = parte1 + parte2;
console.log("Vaquinha: R$ " + vaquinha);
// ✍️ SOLUÇÃO DA DUPLA (mostre a vaquinha CERTA):


/* ═══ EXERCÍCIO 13 — 🛡️ O airbag (try/catch) ═══
   CONTEXTO: o servidor mandou um JSON cortado pela metade —
   acontece MUITO na vida real: */
let jsonCortado = '{"vaga":"Dev Júnior","sal';
/* TAREFA: tente o JSON.parse DENTRO de um try; no catch, mostre
   "⚠️ Resposta corrompida, tente de novo: " + erro.message
   — e o script continua vivo (o exercício 14 tem que rodar!).
   EXEMPLO (molde):
       try { ...o perigoso... } catch (erro) { ...o plano B... }
   RESULTADO ESPERADO: ⚠️ Resposta corrompida, tente de novo: ... */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 14 — 🛡️ O segurança na porta (validação) ═══
   CONTEXTO: o formulário de recarga do bilhete único 🚌 aceita
   qualquer coisa — e não pode.
   TAREFA: crie 'validarRecarga(texto)' que:
   - se texto === ""              → retorna "⚠️ Campo vazio"
   - se isNaN(Number(texto))      → retorna "⚠️ Isso não é número"
   - se Number(texto) <= 0        → retorna "⚠️ Valor tem que ser positivo"
   - senão                        → retorna "✅ Recarga de R$ " + Number(texto)
   Teste com: ""  ·  "abc"  ·  "-5"  ·  "20"
   🧠 COMO PENSAR:
      1º um if por regra, NA ORDEM do enunciado (vazio → NaN → negativo)
      2º cada if tem seu return — quem retorna, sai na hora
      3º se o texto sobreviveu aos 3 seguranças, ele é válido
   DICA: guard clauses — if + return cedo, um teste por vez.
   RESULTADO ESPERADO:
   ⚠️ Campo vazio / ⚠️ Isso não é número / ⚠️ Valor tem que ser positivo / ✅ Recarga de R$ 20 */
// ✍️ SOLUÇÃO DA DUPLA:


/* ═══ EXERCÍCIO 15 — 🏆 DESAFIO DA DUPLA: o pedido blindado ═══
   CONTEXTO: juntando a semana INTEIRA num só programa — objetos,
   JSON, try/catch e validação. É o esqueleto da SA!
   TAREFA: crie 'lerPedido(texto)' que:
   a) faz JSON.parse dentro de try/catch
      (explodiu? → retorna "⚠️ Pedido inválido")
   b) se a lista tem length 0 → retorna "⚠️ Pedido vazio"
   c) soma os .preco com for e retorna "Total: R$ <valor>"
   🧠 COMO PENSAR (a ordem das defesas):
      1º o parse é o perigo → vai DENTRO do try; o catch retorna o aviso
      2º sobreviveu? Guard clause do vazio (length === 0 → return)
      3º só ENTÃO o for soma — a essa altura a lista é confiável
      4º return da frase final com o total
   Teste com os três:
       lerPedido('[{"item":"Pizza","preco":60},{"item":"Refri","preco":12}]')
       lerPedido('{quebrado')
       lerPedido('[]')
   RESULTADO ESPERADO: Total: R$ 72 / ⚠️ Pedido inválido / ⚠️ Pedido vazio */
// ✍️ SOLUÇÃO DA DUPLA:



/* ============================================================
   ✅ CHECKLIST FINAL DA DUPLA
   [ ] Todas as saídas batem com o resultado esperado?
   [ ] Os DOIS sabem explicar o par stringify/parse e o try/catch?
   [ ] Commit nos DOIS GitHubs:
        git commit -m "Semana 07 resolvida — dupla X & Y"
   [ ] Fechou as 5 listas? 🎉 Vocês estão prontos para a SA —
       e com um portfólio no GitHub para mostrar na entrevista!
   ============================================================ */
