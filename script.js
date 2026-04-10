// ===== CURIOSIDADES DA COPA =====
const curiosidades = [
  "🌍 A Copa do Mundo 2026 será a primeira realizada em três países: Estados Unidos, Canadá e México!",
  "😬 A Itália, 4x campeã mundial, ficou de fora da Copa 2026 pela TERCEIRA vez consecutiva! A Azzurra não se classifica desde 2014, uma das maiores zebras do futebol.",
  "⚽ Pela primeira vez na história, 48 seleções disputarão a Copa do Mundo 2026!",
  "🏟️ Serão 16 cidades-sede ao todo — 11 nos Estados Unidos, 3 no México e 2 no Canadá.",
  "🥅 Com 48 times, a Copa terá 104 jogos no total, mais do que qualquer edição anterior.",
  "🏆 O Brasil é o maior campeão da história com 5 títulos: 1958, 1962, 1970, 1994 e 2002.",
  "📅 A Copa de 2026 acontecerá entre junho e julho de 2026.",
  "🌎 Será a terceira vez que o México sedia a Copa — e a segunda para os Estados Unidos.",
  "⭐ A Argentina é a atual campeã, tendo vencido a Copa de 2022 no Catar.",
];

let indiceCuriosidade = 0;

const btnCuriosidade = document.getElementById("btn-curiosidade");
const caixaCuriosidade = document.getElementById("caixa-curiosidade");

if (btnCuriosidade) {
  btnCuriosidade.addEventListener("click", function () {
    caixaCuriosidade.style.display = "block";
    caixaCuriosidade.innerHTML = curiosidades[indiceCuriosidade];
    indiceCuriosidade = (indiceCuriosidade + 1) % curiosidades.length;
    btnCuriosidade.textContent = "Ver Outra Curiosidade 🔄";
  });
}

// ===== CLIQUE NOS PAÍSES =====
function infoSelecao(pais) {
  const infos = {
    "Brasil": "🇧🇷 BRASIL — 5x Campeão!\nTítulos: 1958, 1962, 1970, 1994, 2002\nO maior vencedor da história da Copa do Mundo!",
    "Argentina": "🇦🇷 ARGENTINA — 3x Campeã!\nTítulos: 1978, 1986, 2022\nAtual campeã mundial com Lionel Messi!",
    "Alemanha": "🇩🇪 ALEMANHA — 4x Campeã!\nTítulos: 1954, 1974, 1990, 2014\nUma das maiores potências do futebol mundial!",
    "França": "🇫🇷 FRANÇA — 2x Campeã!\nTítulos: 1998, 2018\nVicecampeã em 2022, busca o tri em 2026!",
    "Espanha": "🇪🇸 ESPANHA — 1x Campeã!\nTítulo: 2010\nConhecida pelo estilo de jogo 'La Furia Roja'!",
    "Inglaterra": "🏴󠁧󠁢󠁥󠁮󠁧󠁿 INGLATERRA — 1x Campeã!\nTítulo: 1966\nO futebol foi inventado na Inglaterra!",
    "Portugal": "🇵🇹 PORTUGAL — Nunca foi campeão\nMelhor resultado: 3º lugar em 1966\nTem Cristiano Ronaldo como grande estrela!",
    "México": "🇲🇽 MÉXICO — Nunca foi campeão\nMelhor resultado: Quartas de final\nUm dos co-anfitriões da Copa 2026!",
    "Canadá": "🇨🇦 CANADÁ — Estreante\nPrimeira Copa em 1986\nCo-anfitrião da Copa 2026!",
    "Estados Unidos": "🇺🇸 ESTADOS UNIDOS — Co-anfitrião!\nMelhor resultado: Semifinal em 1930\nVai sediar a Copa 2026 pela 2ª vez!",
    "Holanda": "🇳🇱 HOLANDA — Nunca foi campeã\nMelhor resultado: Vice em 1974, 1978 e 2010\nConhecida como 'Laranja Mecânica'!",
    "Bélgica": "🇧🇪 BÉLGICA — Nunca foi campeã\nMelhor resultado: 3º lugar em 2018\n A incrível geração belga!",
    "Uruguai": "🇺🇾 URUGUAI — 2x Campeão!\nTítulos: 1930, 1950\nPrimeiro campeão mundial da história!",
    "Itália": "🇮🇹 ITÁLIA — 4x Campeã!\nTítulos: 1934, 1938, 1982, 2006\nUm dos países mais vitoriosos da Copa!",
  };

  const msg = infos[pais] || `⚽ ${pais}\nEsta seleção está classificada para a Copa do Mundo 2026!\nBoa sorte na competição! 🏆`;
  alert(msg);
}
