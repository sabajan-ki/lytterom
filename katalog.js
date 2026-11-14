// Lytterom – katalog. Én rad per album:
// [id, artist, tittel, år, [smak], [stemning], notat]
// smak: jul, crooner, vokaljazz, bach, rameau, barokk, piano, cembalo, jazzpiano, nordisk
// stemning: jul, kveld, fokus, gjester, morgen, dypt
window.KATALOG = [
  // ── Jul ──
  ["sinatra-jolly", "Frank Sinatra", "A Jolly Christmas from Frank Sinatra", 1957, ["jul","crooner"], ["jul","gjester"], "Sinatra med Gordon Jenkins' strykere. Første halvdel er populære julesanger, andre halvdel julesalmer."],
  ["cole-christmas", "Nat King Cole", "The Christmas Song", 1963, ["jul","crooner"], ["jul","kveld","gjester"], "Den varmeste stemmen i sjangeren, i fyldig stereo fra Capitol."],
  ["crosby-merry", "Bing Crosby", "Merry Christmas", 1955, ["jul","crooner"], ["jul","gjester"], "Albumet med «White Christmas». Opptakene er fra 1940-årene, så lyden er mono og gammel, men selve utgangspunktet for crooner-jula."],
  ["martin-winter", "Dean Martin", "A Winter Romance", 1959, ["jul","crooner"], ["jul","gjester"], "Mer vinter enn jul: avslappet Dean Martin med «Baby, It's Cold Outside» og «Let It Snow»."],
  ["ella-swinging", "Ella Fitzgerald", "Ella Wishes You a Swinging Christmas", 1960, ["jul","vokaljazz"], ["jul","gjester","morgen"], "Storbandjul med driv. Verve-opptaket holder seg svært godt."],
  ["bennett-snowfall", "Tony Bennett", "Snowfall: The Tony Bennett Christmas Album", 1968, ["jul","crooner"], ["jul","kveld"], "Bennett med Robert Farnons arrangementer, mer lavmælt enn Sinatra."],
  ["williams-christmas", "Andy Williams", "The Andy Williams Christmas Album", 1963, ["jul","crooner"], ["jul","gjester"], "Her kom «It's the Most Wonderful Time of the Year» første gang."],
  ["mathis-merry", "Johnny Mathis", "Merry Christmas", 1958, ["jul","crooner"], ["jul","kveld"], "Mathis med Percy Faiths orkester. Tidlig stereo fra Columbia, mye luft rundt stemmen."],
  ["buble-christmas", "Michael Bublé", "Christmas", 2011, ["jul","crooner"], ["jul","gjester"], "Den moderne standarden for crooner-jul, med moderne studiolyd."],
  ["krall-christmas", "Diana Krall", "Christmas Songs", 2005, ["jul","vokaljazz","jazzpiano"], ["jul","kveld","gjester"], "Krall med Clayton-Hamilton Jazz Orchestra. Svært godt innspilt."],
  ["porter-wish", "Gregory Porter", "Christmas Wish", 2023, ["jul","vokaljazz","crooner"], ["jul","kveld"], "En nåtidig baryton i crooner-tradisjonen, med egne låter blant standardene."],
  ["jones-dream", "Norah Jones", "I Dream of Christmas", 2021, ["jul","vokaljazz"], ["jul","kveld","morgen"], "Dempet og hjemmekoselig, halvparten egne sanger."],
  ["nilsen-merry", "Kurt Nilsen", "Have Yourself a Merry Little Christmas", 2010, ["jul","crooner","nordisk"], ["jul","gjester"], "Norsk crooner-jul med Kringkastingsorkestret."],
  ["sissel-glade", "Sissel Kyrkjebø", "Glade jul", 1987, ["jul","nordisk"], ["jul","kveld"], "De norske julesangene, og en av de mest solgte platene i Norge."],
  ["bugge-snowing", "Bugge Wesseltoft", "It's Snowing on My Piano", 1997, ["jul","jazzpiano","piano","nordisk"], ["jul","kveld","fokus","morgen"], "Julesanger for solo piano, helt stille spilt. Her møtes julemusikken og pianointeressen din."],
  ["guaraldi-charlie", "Vince Guaraldi Trio", "A Charlie Brown Christmas", 1965, ["jul","jazzpiano"], ["jul","morgen","gjester"], "Pianotrio-jul. Lett, melodisk og lett å ha på lenge."],
  ["bach-juleoratoriet", "John Eliot Gardiner, Monteverdi Choir", "Bach: Weihnachtsoratorium", 1987, ["jul","bach","barokk"], ["jul","dypt","morgen"], "Bachs juleoratorium på tidsriktige instrumenter. For dagene du vil ha jul og Bach samtidig."],

  // ── Crooner og vokaljazz ──
  ["sinatra-wee", "Frank Sinatra", "In the Wee Small Hours", 1955, ["crooner"], ["kveld","dypt"], "Nattalbumet. Ballader med Nelson Riddle, tenkt som en helhet fra første til siste spor."],
  ["sinatra-swingin", "Frank Sinatra", "Songs for Swingin' Lovers!", 1956, ["crooner"], ["gjester","morgen"], "Motstykket til nattalbumet: opplagt swing, med «I've Got You Under My Skin»."],
  ["sinatra-sands", "Frank Sinatra", "Sinatra at the Sands", 1966, ["crooner"], ["gjester"], "Konsertopptak med Count Basies orkester, arrangert og ledet av Quincy Jones."],
  ["cole-love", "Nat King Cole", "Love Is the Thing", 1957, ["crooner"], ["kveld","gjester"], "Strykerballader med Gordon Jenkins, blant dem «Stardust» og «When I Fall in Love»."],
  ["cole-midnight", "Nat King Cole", "After Midnight", 1957, ["crooner","jazzpiano","vokaljazz"], ["kveld","gjester"], "Cole tilbake ved pianoet med trioen og gjestesolister. Viser hvor god jazzpianist han var."],
  ["bennett-evans", "Tony Bennett & Bill Evans", "The Tony Bennett/Bill Evans Album", 1975, ["crooner","jazzpiano","vokaljazz"], ["kveld","dypt"], "Bare stemme og piano. Passer godt når du vil ha crooner og pianomusikk i samme plate."],
  ["coltrane-hartman", "John Coltrane & Johnny Hartman", "John Coltrane and Johnny Hartman", 1963, ["crooner","vokaljazz"], ["kveld","dypt"], "Dyp baryton og Coltranes kvartett i seks ballader. Kort plate uten et svakt spor."],
  ["baker-sings", "Chet Baker", "Chet Baker Sings", 1954, ["vokaljazz","crooner"], ["kveld","morgen"], "Skjør, nesten hviskende sang og trompet. «My Funny Valentine» ligger her."],
  ["ella-louis", "Ella Fitzgerald & Louis Armstrong", "Ella and Louis", 1956, ["vokaljazz"], ["gjester","morgen","kveld"], "To stemmer med Oscar Petersons kvartett bak. Et tidlig Verve-opptak som fortsatt låter nært."],
  ["porter-liquid", "Gregory Porter", "Liquid Spirit", 2013, ["vokaljazz","crooner"], ["gjester","morgen"], "Gjennombruddsplata hans på Blue Note, varm og soulpreget."],
  ["krall-paris", "Diana Krall", "Live in Paris", 2002, ["vokaljazz","jazzpiano"], ["gjester","kveld"], "Konsert fra Olympia i Paris. Mye brukt som referanseplate for lydanlegg."],
  ["torme-shubert", "Mel Tormé", "Mel Tormé Swings Shubert Alley", 1960, ["crooner","vokaljazz"], ["gjester","morgen"], "Broadway-melodier med Marty Paichs lille storband. Lett og presis swing."],
  ["martin-sleep", "Dean Martin", "Sleep Warm", 1959, ["crooner"], ["kveld"], "Godnattsanger der Frank Sinatra dirigerer orkesteret."],

  // ── Bach på klaver ──
  ["gould-goldberg81", "Glenn Gould", "Bach: Goldberg Variations (1981)", 1982, ["bach","piano","barokk"], ["dypt","kveld","fokus"], "Goulds sene, langsomme og gjennomtenkte versjon. Et tidlig digitalopptak."],
  ["gould-goldberg55", "Glenn Gould", "Bach: Goldberg Variations (1955)", 1956, ["bach","piano","barokk"], ["dypt","morgen"], "Debuten: rask og ungdommelig, i mono. Fint å høre opp mot 1981-versjonen."],
  ["perahia-goldberg", "Murray Perahia", "Bach: Goldberg Variations", 2000, ["bach","piano","barokk"], ["dypt","kveld","fokus"], "Syngende og naturlig, for mange førstevalget på moderne flygel."],
  ["perahia-franske", "Murray Perahia", "Bach: The French Suites", 2016, ["bach","piano","barokk"], ["fokus","morgen","kveld"], "De franske suitene. Dansesatsene ligger nær Rameaus verden."],
  ["schiff-wtc", "András Schiff", "Bach: Das Wohltemperierte Clavier", 2012, ["bach","piano","barokk"], ["dypt","fokus"], "Begge bøkene på ECM, spilt uten pedal og med klar lyd."],
  ["schiff-partitas", "András Schiff", "Bach: Six Partitas", 2009, ["bach","piano","barokk"], ["dypt","fokus","morgen"], "Konsertopptak på ECM, dansende og lett."],
  ["olafsson-bach", "Víkingur Ólafsson", "Johann Sebastian Bach", 2018, ["bach","piano","barokk","nordisk"], ["fokus","kveld","morgen"], "Korte stykker og transkripsjoner satt sammen som en spilleliste. Svært godt innspilt."],
  ["olafsson-goldberg", "Víkingur Ólafsson", "Bach: Goldberg Variations", 2023, ["bach","piano","barokk","nordisk"], ["dypt","kveld","fokus"], "En nyere Goldberg, med gjennomsiktig klang og moderne lyd."],
  ["hewitt-goldberg", "Angela Hewitt", "Bach: Goldberg Variations", 2016, ["bach","piano","barokk"], ["dypt","fokus"], "Hewitts andre innspilling, på Fazioli-flygel for Hyperion."],
  ["levit-partitas", "Igor Levit", "Bach: Partitas", 2014, ["bach","piano","barokk"], ["dypt","fokus"], "Alle seks partitaene, klart og rolig spilt."],
  ["rana-goldberg", "Beatrice Rana", "Bach: Goldberg Variations", 2017, ["bach","piano","barokk"], ["dypt","kveld"], "En yngre pianist med mye farge og frihet i spillet."],
  ["blechacz-bach", "Rafał Blechacz", "Johann Sebastian Bach", 2017, ["bach","piano","barokk"], ["fokus","morgen"], "Italiensk konsert, partitaer og mindre stykker, lyst og elegant."],
  ["anderszewski-wtc", "Piotr Anderszewski", "Bach: Well-Tempered Clavier, Book 2 (Excerpts)", 2021, ["bach","piano","barokk"], ["dypt","kveld"], "Tolv preludier og fuger i en rekkefølge han har valgt selv."],
  ["argerich-bach", "Martha Argerich", "Bach: Toccata BWV 911, Partita No. 2, English Suite No. 2", 1980, ["bach","piano","barokk"], ["morgen","dypt"], "Argerichs eneste solo-Bach på plate, rytmisk og kraftfull."],
  ["jarrett-wtc", "Keith Jarrett", "Bach: Das Wohltemperierte Klavier, Buch I", 1988, ["bach","piano","barokk"], ["fokus","dypt"], "Jazzpianisten spiller Bach rett fram, uten improvisasjon."],
  ["hantai-goldberg", "Pierre Hantaï", "Bach: Goldberg Variations", 1993, ["bach","cembalo","barokk"], ["dypt","morgen"], "Goldberg på cembalo, instrumentet verket ble skrevet for."],
  ["mehldau-after", "Brad Mehldau", "After Bach", 2018, ["bach","jazzpiano","piano"], ["dypt","kveld","fokus"], "Preludier og fuger fra Wohltemperiertes Klavier, hver fulgt av Mehldaus egne svar."],
  ["loussier-play", "Jacques Loussier Trio", "Play Bach No. 1", 1959, ["bach","jazzpiano"], ["gjester","morgen"], "Bach som pianotrio-jazz. Lett inngang når det er folk til stede."],

  // ── Rameau og fransk barokk ──
  ["tharaud-rameau", "Alexandre Tharaud", "Rameau: Nouvelles Suites", 2001, ["rameau","piano","barokk"], ["fokus","morgen","dypt"], "Plata som fikk mange til å høre Rameau på moderne flygel."],
  ["olafsson-rameau", "Víkingur Ólafsson", "Debussy – Rameau", 2020, ["rameau","piano","barokk","nordisk"], ["kveld","fokus","dypt"], "Rameau og Debussy satt opp mot hverandre, med hans egen transkripsjon «The Arts and the Hours»."],
  ["meyer-rameau", "Marcelle Meyer", "Rameau: Pièces de clavecin", 1953, ["rameau","piano","barokk"], ["dypt","morgen"], "Historisk mono-opptak. Hun var tidlig ute med Rameau på piano, og mange senere pianister viser til henne."],
  ["hewitt-rameau", "Angela Hewitt", "Rameau: Keyboard Suites", 2007, ["rameau","piano","barokk"], ["fokus","morgen"], "Tre suiter, klart og dansende spilt."],
  ["barto-rameau", "Tzimon Barto", "Rameau: A Basket of Wild Strawberries", 2006, ["rameau","piano","barokk"], ["kveld","dypt"], "Fri og romantisk Rameau, langt fra tidsriktig praksis. Verdt et forsøk for kontrasten."],
  ["rousset-rameau", "Christophe Rousset", "Rameau: Pièces de clavecin", 1991, ["rameau","cembalo","barokk"], ["dypt","morgen"], "Rameau på cembalo, en mye brukt referanseinnspilling."],
  ["taylor-famille", "Justin Taylor", "La Famille Rameau", 2021, ["rameau","cembalo","barokk"], ["morgen","dypt"], "Ung fransk cembalist med Rameau og musikk av slektningene hans."],
  ["tharaud-tictoc", "Alexandre Tharaud", "Couperin: Tic toc choc", 2007, ["barokk","piano"], ["fokus","morgen"], "François Couperin på flygel. Nærmeste nabo til Rameau."],
  ["tharaud-versailles", "Alexandre Tharaud", "Versailles", 2019, ["barokk","piano","rameau"], ["fokus","kveld","gjester"], "Rameau, Couperin, Lully, Royer og de Visée samlet på én plate."],

  // ── Barokke naboer ──
  ["pogorelich-scarlatti", "Ivo Pogorelich", "Scarlatti: Sonatas", 1992, ["barokk","piano"], ["fokus","morgen"], "Femten sonater, krystallklart spilt."],
  ["rondeau-scarlatti", "Jean Rondeau", "Scarlatti: Sonatas", 2018, ["barokk","cembalo"], ["fokus","morgen"], "Scarlatti på cembalo, spilt med mye temperament."],
  ["perahia-handel", "Murray Perahia", "Handel & Scarlatti", 1997, ["barokk","piano"], ["fokus","morgen","gjester"], "Händel-suiter og Scarlatti-sonater. Går godt videre fra Bach-platene hans."],

  // ── Klassisk piano ellers ──
  ["pires-nocturnes", "Maria João Pires", "Chopin: The Nocturnes", 1996, ["piano"], ["kveld","dypt"], "Nocturnene samlet, stille og konsentrert spilt."],
  ["andsnes-grieg", "Leif Ove Andsnes", "Grieg: Lyric Pieces", 2002, ["piano","nordisk"], ["morgen","kveld","fokus"], "Spilt inn på Griegs eget flygel på Troldhaugen."],
  ["zimerman-schubert", "Krystian Zimerman", "Schubert: Piano Sonatas D 959 & D 960", 2017, ["piano"], ["dypt","kveld"], "De to siste sonatene til Schubert."],
  ["roge-satie", "Pascal Rogé", "Satie: 3 Gymnopédies & Other Piano Works", 1984, ["piano"], ["kveld","fokus","morgen"], "Satie slik de fleste kjenner ham, rolig og enkelt."],
  ["michelangeli-debussy", "Arturo Benedetti Michelangeli", "Debussy: Préludes, Book 1", 1978, ["piano"], ["dypt","kveld"], "Presist og kjølig. Debussy var selv opptatt av Rameau, så her er det en forbindelse."],
  ["olafsson-mozart", "Víkingur Ólafsson", "Mozart & Contemporaries", 2021, ["piano","nordisk"], ["fokus","morgen","gjester"], "Mozart sammen med Haydn, C.P.E. Bach, Galuppi og Cimarosa."],

  // ── Jazzpiano ──
  ["evans-debby", "Bill Evans Trio", "Waltz for Debby", 1962, ["jazzpiano"], ["kveld","gjester","dypt"], "Konsertopptak fra Village Vanguard i 1961. Du hører glassene klirre i rommet."],
  ["jarrett-koln", "Keith Jarrett", "The Köln Concert", 1975, ["jazzpiano","piano"], ["dypt","kveld"], "En hel soloimprovisert konsert, og blant de mest solgte pianoplatene som finnes."],
  ["jarrett-melody", "Keith Jarrett", "The Melody at Night, with You", 1999, ["jazzpiano","piano"], ["kveld","fokus"], "Standarder spilt helt enkelt, innspilt hjemme hos ham."],
  ["peterson-requests", "Oscar Peterson Trio", "We Get Requests", 1964, ["jazzpiano"], ["gjester","morgen"], "Lettbeint og virtuost. Et annet opptak som ofte brukes til å prøve lydanlegg."],
  ["gustavsen-changing", "Tord Gustavsen Trio", "Changing Places", 2003, ["jazzpiano","nordisk"], ["kveld","fokus","gjester"], "Langsom, salmepreget triojazz på ECM."],
  ["johansson-svenska", "Jan Johansson", "Jazz på svenska", 1964, ["jazzpiano","nordisk"], ["kveld","morgen","fokus"], "Svenske folketoner for piano og bass."]
];
