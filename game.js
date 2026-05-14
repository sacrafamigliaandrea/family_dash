/* ════════════════════════════════════════════════════════════
   FAMILYDASH V3 — GAME ENGINE
   1 mese × 4 settimane × 7 giorni × 3 fasi (mattino/pom/sera)
   ════════════════════════════════════════════════════════════ */

const CLASSI=['1A','2A','3A','1B','2B','3B','1C','2C','3C'];
const MESI=['','Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
const GIORNI_NOMI=['Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato','Domenica'];
const SALA_PIN='familydash26';

const GLOSSARIO={
  'mutuo':{d:'Soldi che la banca presta per comprare casa, da restituire ogni mese.',e:'Rata media: 600-900 €/mese.'},
  'rata':{d:'Una parte di una somma più grande, da pagare ogni tot tempo.',e:'La rata della macchina è 220 €/mese.'},
  'bolletta':{d:'Foglio con quanto la famiglia paga per luce, gas, acqua, internet.',e:'Bolletta gas in inverno: oltre 300 €.'},
  'bimestre':{d:'Periodo di due mesi.',e:'Una bolletta gas bimestrale copre due mesi.'},
  'IMU':{d:'Tassa per chi possiede una casa diversa dalla prima.',e:'Si paga in due rate, giugno e dicembre.'},
  'bollo auto':{d:'Tassa annuale per avere un\'auto.',e:'Per un\'auto media: 200-300 €/anno.'},
  'assicurazione RCA':{d:'Obbligatoria per guidare. Copre danni causati ad altri.',e:'400-600 €/anno.'},
  'netto':{d:'Lo stipendio che arriva sul conto, dopo tasse e contributi.',e:'Lordo 1.800 = netto 1.400 circa.'},
  'lordo':{d:'Lo stipendio prima delle tasse.',e:'Numero più alto della busta paga.'},
  'contributi':{d:'Soldi per la pensione futura.',e:'Circa il 10% del lordo.'},
  'tredicesima':{d:'Mensilità extra a dicembre.',e:'Spesso usata per regali di Natale.'},
  'phishing':{d:'Truffa via email per rubare dati o soldi.',e:'"Il tuo conto è bloccato, clicca qui".'},
  'smishing':{d:'Phishing via SMS.',e:'"Pacco in giacenza, clicca".'},
  'dominio':{d:'Indirizzo principale di un sito.',e:'amaz0n.it (con uno zero) non è Amazon.'},
  'microtransazione':{d:'Piccolo pagamento dentro un\'app o un gioco.',e:'Una skin 7,99: cinque skin sono 40 €.'},
  'straordinario':{d:'Ore di lavoro in più del normale.',e:'200 € in più ma tre serate in meno con la famiglia.'}
};

const FAMIGLIE={
  romano:{nome:'Romano',tag:'Ceto medio impiegatizio',scheda:'Appartamento al terzo piano di una palazzina anni Ottanta. Le finestre danno su un cortile con un ciliegio. Papà Marco in banca, mamma Sara maestra. Sorella Elena, dieci anni, fatica in matematica. Tu hai quattordici anni. Vacanze in Riviera, due auto, <span class="gloss" data-g="mutuo">mutuo</span> che scade nel 2031.',bilancio:1850,casa:'proprietà_mutuo',mutuo_rata:720,affitto_rata:0,valore_casa:240000,risparmi:2400,stipendio_lordo:4200},
  colombo:{nome:'Colombo',tag:'Mamma sola, un figlio',scheda:'Appartamento in affitto sopra un piccolo supermercato. Mamma Giulia infermiera: tre notti a settimana. Tu, tredici anni. La nonna a due strade. Tuo padre lo vedi un weekend ogni due. Sul tavolo sempre due tazze. Non avete macchina.',bilancio:980,casa:'affitto',mutuo_rata:0,affitto_rata:580,valore_casa:0,risparmi:600,stipendio_lordo:2400},
  ricci:{nome:'Ricci',tag:'Famiglia numerosa',scheda:'Siete in sei in un appartamento popolare. Papà Antonio in magazzino, mamma Roberta al supermercato part-time. Tu, tredici, in mezzo a tre fratelli: Sofia cinque, Davide nove, Anna sedici. Il frigo coperto di disegni. D\'estate campeggio al lago.',bilancio:620,casa:'affitto',mutuo_rata:0,affitto_rata:420,valore_casa:0,risparmi:300,stipendio_lordo:2800},
  bruno:{nome:'Bruno',tag:'Artigiano e nonno convivente',scheda:'Casa indipendente di periferia, giardino sul retro. Papà Stefano falegname, bottega a venti minuti. Mamma Carla all\'ufficio comunale. Il nonno paterno vive con voi al piano terra. Tu tredici, sorella Beatrice undici. Il reddito di papà ballerino: mesi pieni e mesi vuoti.',bilancio:1100,casa:'proprietà',mutuo_rata:0,affitto_rata:0,valore_casa:180000,risparmi:1800,stipendio_lordo:3400},
  mancinideluca:{nome:'Mancini & De Luca',tag:'Genitori separati, affido condiviso',scheda:'Sei figlia unica, dodici anni. Genitori separati da quando ne avevi sette. Papà Andrea tecnico informatico, mamma Laura commercialista. Una settimana da uno, una dall\'altra. Due camere, due paia di chiavi. Papà cucina meglio. Mamma ti lascia sveglia fino alle dieci.',bilancio:1300,casa:'proprietà_mutuo',mutuo_rata:480,affitto_rata:0,valore_casa:160000,risparmi:1200,stipendio_lordo:3600},
  greco:{nome:'Greco',tag:'Famiglia integrata, origini miste',scheda:'Appartamento al quinto piano vicino al centro. Mamma Elisa italiana, papà Renato nato in Italia ma i suoi genitori arrivati dall\'Albania quarant\'anni fa. Sorella Aurora otto, tu quattordici. Una volta al mese mandate soldi ai nonni paterni. Mamma segretaria di un dentista, papà tecnico in azienda.',bilancio:1500,casa:'proprietà_mutuo',mutuo_rata:590,affitto_rata:0,valore_casa:175000,risparmi:1500,stipendio_lordo:3500},
  rizzo:{nome:'Rizzo',tag:'Famiglia con figlio con disabilità',scheda:'Tuo fratello Davide undici anni, autistico. Routine precise, tempi suoi, niente rumori. Tu dodici, sorella Martina quindici. Mamma Federica ha lasciato il lavoro tre anni fa per Davide a tempo pieno. Papà Paolo ingegnere. Le terapie di Davide costano.',bilancio:1400,casa:'proprietà_mutuo',mutuo_rata:640,affitto_rata:0,valore_casa:200000,risparmi:2200,stipendio_lordo:3900},
  lombardi:{nome:'Lombardi',tag:'Famiglia giovane, fratellino piccolo',scheda:'Hai dodici anni. Mamma Chiara trentadue, ti ha avuto a venti. Il suo compagno Stefano vive con voi da sei anni: padre del fratellino Lorenzo, due anni. Tuo padre biologico lo senti ogni tanto. Appartamento appena comprato: <span class="gloss" data-g="mutuo">mutuo</span> alto, asilo costa.',bilancio:1300,casa:'proprietà_mutuo',mutuo_rata:820,affitto_rata:0,valore_casa:195000,risparmi:900,stipendio_lordo:4100},
  valentini:{nome:'Valentini & Barbieri',tag:'Famiglia ricomposta',scheda:'Vivi con mamma Marta, sorella maggiore Giorgia (sedici) e Luca, compagno di mamma da quasi tre anni. Tu, tredici. Sabato-domenica arriva Tommaso, figlio di Luca, dieci. Un calendario gigante sul frigo con quattro colori. Mamma psicologa, Luca nei trasporti.',bilancio:1450,casa:'proprietà_mutuo',mutuo_rata:680,affitto_rata:0,valore_casa:210000,risparmi:1700,stipendio_lordo:3800},
  fontana:{nome:'Fontana',tag:'Famiglia rurale, azienda agricola',scheda:'Cascina alla periferia di un paese. Casa di famiglia da tre generazioni: niente <span class="gloss" data-g="mutuo">mutuo</span>. Papà Marco e mamma Anna gestiscono un\'azienda agricola: pomodori, mais, sei mucche. Fratello Filippo diciassette, aiuta nei pomeriggi. Tu tredici. L\'estate il lavoro è infinito.',bilancio:950,casa:'proprietà',mutuo_rata:0,affitto_rata:0,valore_casa:320000,risparmi:2800,stipendio_lordo:3200}
};

/* MATERIE — argomenti reali dal curriculum cittadinanza digitale di Andrea
   e dal programma standard SSPG. Per cambiare argomenti edita arg[] */
const MATERIE={
  ITA:{nome:'Italiano',icon:'iconoir-book',prof:'prof.ssa Rota',arg:['Analisi del testo: un brano di Calvino.','Scrittura argomentativa: "I social fanno bene o male?". Schema valenziale alla lavagna.','Lettura ad alta voce: "Se questo è un uomo" di Primo Levi.','La metafora e la similitudine. Esempi alla lavagna.','Lavoro a coppie: scrittura di un racconto breve.','Recensione di un libro letto a casa.','Grammatica: complementi diretti e indiretti.','Dettato ortografico sui doppi.']},
  MAT:{nome:'Matematica',icon:'iconoir-calculator',prof:'prof. Regonini',arg:['Verifica: equazioni di primo grado.','Teorema di Pitagora applicato.','Problemi con percentuali alla lavagna.','Geometria solida: prisma e cilindro a confronto.','Statistica: medie, mediane, frequenze.','Interrogazione sui numeri relativi.','Esercizi di calcolo letterale.','Problemi con dati nascosti.']},
  ING:{nome:'Inglese',icon:'iconoir-globe',prof:'prof.ssa Bertoli',arg:['Listening: dialogo "At the airport". Domande sul testo.','Speaking: descrivi la tua famiglia in due minuti.','Present perfect vs simple past.','Reading: estratto di "Animal Farm" di Orwell.','Role play: ordinare al ristorante.','Vocabolario: parole sulla scuola.','Lezione con la madrelingua: pronuncia "th".','Comprensione di un breve video.']},
  SCI:{nome:'Scienze',icon:'iconoir-flask',prof:'prof.ssa Grassi',arg:['Sintesi proteica: dal DNA alla proteina (l\'app di laboratorio).','Sistema circolatorio. Schema alla lavagna.','Esperimento di chimica: reazioni acido-base.','Genetica: i caratteri ereditari e i piselli di Mendel.','Verifica sull\'ecosistema: catena alimentare.','Microscopio: cellule vegetali.','Apparato digerente: dal cibo all\'energia.','Terremoti: tettonica delle placche.']},
  STO:{nome:'Storia e Geografia',icon:'iconoir-scroll',prof:'prof. Bulla',arg:['Prima Guerra Mondiale: le trincee.','Stati dell\'Unione Europea: capitali e bandiere.','Il fascismo in Italia.','Costituzione: art. 1, art. 3.','Verifica sulla Resistenza e la Liberazione.','Lavoro di gruppo: una regione a testa.','Carta tematica: la popolazione mondiale.','Cittadinanza europea: i diritti che hai.']},
  TEC:{nome:'Tecnologia',icon:'iconoir-cpu',prof:'prof. Cerioli',arg:['CyberEscape: dieci scenari di sex extortion riconosciuti.','Patto Digitale: regoliamo l\'uso del telefono in famiglia.','AI generativa: cosa sa fare ChatGPT, cosa no.','La Macchina e lo Specchio: il Perceptron simulato.','Disegno tecnico: proiezioni ortogonali di un solido.','Verifica: <span class="gloss" data-g="phishing">phishing</span>, <span class="gloss" data-g="smishing">smishing</span>, <span class="gloss" data-g="dominio">dominio</span> sospetto.','Garage Valley: come i tech visionari hanno cambiato il mondo.','Stampa 3D: progettiamo un portachiavi.']},
  MOT:{nome:'Educazione Motoria',icon:'iconoir-running',prof:'prof.ssa Bonetti',arg:['Preparazione torneo pallavolo: schemi di ricezione.','Test motori: velocità, salto in lungo.','Partita basket 5×5: lavoro di squadra.','Atletica: corsa di resistenza, 1000 metri.','Fitness: circuit training a stazioni.','Pallamano: passaggi e tiro in porta.','Funicella, coordinazione, equilibrio.','Lezione teorica: il riscaldamento e perché serve.']},
  ARTE:{nome:'Arte e Musica',icon:'iconoir-music-double-note',prof:'prof.ssa Mercandelli',arg:['Caravaggio e il chiaroscuro.','Tecnica: matita morbida, ombreggiatura.','Ascolto guidato della Quarta di Beethoven.','Disegno dal vero: una mela e un panno.','Botticelli e la Primavera.','Pratica strumentale: flauto, "Inno alla gioia".','Prospettiva centrale.','Land art: composizione con elementi naturali.']}
};
const MATERIE_IDS=Object.keys(MATERIE);

/* Orario settimanale: 5 giorni × 6 ore = 30 ore */
const ORARIO={
  0:['ITA','MAT','ING','SCI','MOT','ARTE'],
  1:['MAT','ITA','STO','ING','TEC','ARTE'],
  2:['ITA','MAT','STO','SCI','MOT','TEC'],
  3:['ITA','ING','MAT','TEC','ARTE','STO'],
  4:['MAT','SCI','ITA','STO','MOT','ING']
};
const ORE_INIZIO=['8:00','8:55','9:50','10:55','11:50','12:45'];

/* Microeventi orari — capitano in classe modulati per mood */
const MICRO_LEZIONI=[
  {id:'me_interrog',titolo:'Vieni alla lavagna',testo:'La prof guarda il registro. Pronuncia il tuo numero. "Vieni alla lavagna."',
    rami:[
      {let:'A',testo:'Vado deciso. Comincio.',eff_l:{voto:8,energia:-3},eff_n:{voto:7,energia:-4},eff_o:{voto:5,energia:-5}},
      {let:'B',testo:'Vado, ma chiedo di rivedere due minuti.',eff_l:{voto:9,energia:-4},eff_n:{voto:7,energia:-4},eff_o:{voto:6,energia:-5}},
      {let:'C',testo:'Dico di no, mi rendo disponibile domani.',eff_l:{voto:6,disciplina:1},eff_n:{voto:5,disciplina:1},eff_o:{voto:4,disciplina:1}}
    ]},
  {id:'me_verifica',titolo:'Verifica a sorpresa',testo:'La prof entra con un pacco di fogli. "Verifica. Mezz\'ora."',
    rami:[
      {let:'A',testo:'Mi concentro. Punto al massimo.',eff_l:{voto:9,studio:2,energia:-5},eff_n:{voto:7,energia:-5},eff_o:{voto:5,energia:-6}},
      {let:'B',testo:'Ci provo, mollo a metà.',eff_l:{voto:7,energia:-3},eff_n:{voto:6,energia:-4},eff_o:{voto:4,energia:-4}},
      {let:'C',testo:'Consegno bianco. "Non ce la faccio."',eff_l:{voto:5},eff_n:{voto:4},eff_o:{voto:3,relazioni:-2}}
    ]},
  {id:'me_gruppo',titolo:'Lavoro di gruppo',testo:'La prof divide la classe. Una presentazione entro l\'ora.',
    rami:[
      {let:'A',testo:'Coordino io. Prendo i pezzi difficili.',eff_l:{voto:8,relazioni:2,energia:-3},eff_n:{voto:7,relazioni:2,energia:-4},eff_o:{voto:6,relazioni:1,energia:-4}},
      {let:'B',testo:'Faccio la mia parte, niente di più.',eff_l:{voto:7},eff_n:{voto:6},eff_o:{voto:5}},
      {let:'C',testo:'Ci lasciamo trascindere, ridiamo.',eff_l:{voto:5,relazioni:3},eff_n:{voto:4,relazioni:3},eff_o:{voto:3,relazioni:3,disciplina:-1}}
    ]},
  {id:'me_lettura',titolo:'Lettura ad alta voce',testo:'"Leggi il prossimo paragrafo, per favore."',
    rami:[
      {let:'A',testo:'Leggo con intenzione, do voce ai personaggi.',eff_l:{voto:8,slancio:1},eff_n:{voto:7},eff_o:{voto:6,energia:-3}},
      {let:'B',testo:'Leggo bene, senza espressione.',eff_l:{voto:7},eff_n:{voto:6},eff_o:{voto:5}},
      {let:'C',testo:'Inciampo su tre parole. Mi blocco.',eff_l:{voto:6},eff_n:{voto:5},eff_o:{voto:4,coraggio_civile:-1}}
    ]},
  {id:'me_complim',titolo:'Un complimento del prof',testo:'La prof osserva il tuo lavoro. "Bravissimo. Continua così."',
    rami:[
      {let:'A',testo:'Ringrazio e tiro dritto.',eff_l:{voto:9,energia:3,slancio:2},eff_n:{voto:8,energia:3,slancio:2},eff_o:{voto:7,energia:5,slancio:3}}
    ]},
  {id:'me_lite',titolo:'Una lite in classe',testo:'Due compagni si mandano bigliettini con insulti. Il bigliettino arriva da te per sbaglio.',
    rami:[
      {let:'A',testo:'Lo straccio. Non passa.',eff_l:{voto:6,coraggio_civile:2},eff_n:{voto:6,coraggio_civile:2},eff_o:{voto:5,coraggio_civile:2}},
      {let:'B',testo:'Lo passo come nulla fosse.',eff_l:{voto:6,coraggio_civile:-1},eff_n:{voto:6,coraggio_civile:-1},eff_o:{voto:6,coraggio_civile:-1}},
      {let:'C',testo:'Lo passo alla prof.',eff_l:{voto:6,coraggio_civile:3,relazioni:-2},eff_n:{voto:6,coraggio_civile:3,relazioni:-2},eff_o:{voto:6,coraggio_civile:3,relazioni:-2}}
    ]},
  {id:'me_telefono',titolo:'Il telefono squilla',testo:'Sul tuo iPad arriva una notifica. Squilla. Tutti ti guardano. La prof anche.',
    rami:[
      {let:'A',testo:'Silenzio immediato. "Scusi prof."',eff_l:{voto:6,disciplina:1},eff_n:{voto:6,disciplina:1},eff_o:{voto:5,disciplina:1}},
      {let:'B',testo:'Guardo di sfuggita la notifica.',eff_l:{voto:5,disciplina:-1},eff_n:{voto:5,disciplina:-1},eff_o:{voto:4,disciplina:-2}},
      {let:'C',testo:'"Non sono stato io! Era partito da solo."',eff_l:{voto:5},eff_n:{voto:4,coraggio_civile:-1},eff_o:{voto:3,coraggio_civile:-2}}
    ]},
  {id:'me_attento',titolo:'Spiegazione frontale',testo:'Quaranta minuti di teoria alla lavagna. Niente verifica, niente interrogati.',
    rami:[
      {let:'A',testo:'Sto attento. Prendo appunti.',eff_l:{voto:7,studio:3,energia:-2},eff_n:{voto:6,studio:2,energia:-3},eff_o:{voto:5,studio:1,energia:-3}},
      {let:'B',testo:'Ascolto a metà. Disegno sul margine.',eff_l:{voto:6,studio:1},eff_n:{voto:5},eff_o:{voto:4}},
      {let:'C',testo:'Mi distraggo. Chatto col compagno.',eff_l:{voto:5,relazioni:1},eff_n:{voto:4,relazioni:1,studio:-1},eff_o:{voto:3,relazioni:1,studio:-2}}
    ]},
  {id:'me_esercizi',titolo:'Esercizi in classe',testo:'Cinque esercizi alla lavagna. "Sul quaderno. Dieci minuti."',
    rami:[
      {let:'A',testo:'Li faccio tutti. Bene.',eff_l:{voto:8,studio:2,energia:-3},eff_n:{voto:7,studio:1,energia:-4},eff_o:{voto:5,energia:-4}},
      {let:'B',testo:'Tre su cinque. Gli altri li chiudo dopo.',eff_l:{voto:7,studio:1},eff_n:{voto:6},eff_o:{voto:5}},
      {let:'C',testo:'Li copio dal compagno.',eff_l:{voto:6,disciplina:-1,coraggio_civile:-1},eff_n:{voto:5,disciplina:-1,coraggio_civile:-1},eff_o:{voto:5,disciplina:-1,coraggio_civile:-1}}
    ]}
];

/* Compiti per materia */
const COMPITI_TEMPLATE={
  ITA:[{desc:'Leggere il capitolo 4 e fare riassunto.',t:45},{desc:'Esercizi 1-7 di grammatica sui complementi.',t:30},{desc:'Tema di 1.500 caratteri sul tuo libro preferito.',t:60},{desc:'Imparare a memoria una poesia di Ungaretti.',t:25},{desc:'Analisi logica di cinque frasi.',t:35}],
  MAT:[{desc:'Esercizi 12-18 di equazioni di primo grado.',t:50},{desc:'Tre problemi di geometria sui prismi.',t:40},{desc:'Studiare il teorema di Pitagora a memoria.',t:25},{desc:'Calcolare le percentuali di pagina 87.',t:30},{desc:'Risolvere il problema di p.92 (sfidante).',t:50}],
  ING:[{desc:'Tradurre il testo "My weekend".',t:35},{desc:'Grammar drill sul present perfect.',t:30},{desc:'30 vocaboli sui mezzi di trasporto.',t:30},{desc:'Listening: ripetere il dialogo dell\'unit 4.',t:25}],
  SCI:[{desc:'Studiare il sistema circolatorio.',t:45},{desc:'Schema della sintesi proteica.',t:35},{desc:'Capitolo genetica + schema.',t:50},{desc:'Esercizi sulla classificazione degli animali.',t:25}],
  STO:[{desc:'Prima Guerra Mondiale: cause e date.',t:45},{desc:'Carta UE con capitali.',t:30},{desc:'Tre articoli della Costituzione.',t:25},{desc:'Schema sulla Resistenza italiana.',t:40}],
  TEC:[{desc:'Modulo CyberEscape: truffa ballerina.',t:30},{desc:'Disegno tecnico: proiezioni di un cilindro.',t:45},{desc:'Compilare il Patto Digitale con i genitori.',t:25},{desc:'Riflessione scritta su un\'app AI testata.',t:30}],
  MOT:[{desc:'Allenamento autonomo: 20 minuti di corsa.',t:25},{desc:'Studiare la teoria del riscaldamento.',t:20}],
  ARTE:[{desc:'Finire il disegno della mela.',t:40},{desc:'Studiare Caravaggio: tre opere.',t:30},{desc:'Pratica strumentale: flauto, 10 min.',t:15},{desc:'Ricerca su Botticelli (mezza pagina).',t:35}]
};

/* Scene cucina */
const SCENE_CUCINA={
  1:'Cucina, sera di gennaio. È andata via la luce per dieci minuti, poco fa. Ora è tornata. Sul tavolo c\'è la <span class="gloss" data-g="bolletta">bolletta</span> del gas: il picco di gennaio. Mamma la apre. Resta zitta. Papà mette giù la forchetta. "Quanto?" "Trecentonovanta." Pausa lunga. "Ok. Niente cinema questo mese." Il fratellino chiede: "Anche niente pizza venerdì?" "Vediamo, amore." Hai capito che "vediamo" vuol dire no.',
  2:'Cucina, domenica mattina di febbraio. <span class="gloss" data-g="bollo auto">Bollo auto</span> da pagare. Trecentodieci euro. Papà compila il bollettino. Mamma legge il giornale. "Hai visto l\'articolo sulla scuola?" "Quale?" "Le famiglie spendono in media duemila euro l\'anno solo di libri e materiali." Papà annuisce. "E noi siamo nella media." Il fratellino entra in pigiama. "Possiamo fare i pancake?" Mamma sorride.',
  3:'Cucina, marzo. La luce comincia a essere più lunga. Mamma e papà parlano delle vacanze estive. Prenotare adesso costa meno. "Se andiamo a luglio costa duemila a tutti e quattro. Se andiamo ad agosto, duemilasettecento." Papà guarda mamma. "Luglio?" "Luglio." Tu pensi a chi dei tuoi compagni va dove. Pensi che non importa così tanto.',
  4:'Cucina, sera prima di Pasqua. Odore di colomba. La caldaia ha fatto un rumore strano. "Va sostituita entro l\'inverno. Millecinquecento euro." Mamma e papà si scambiano uno sguardo che dura un secondo di troppo. "Ce la facciamo a settembre." "Sì, ce la facciamo." Stai imparando a leggere quegli sguardi.',
  5:'Cucina, sera di maggio. Mamma al telefono con la zia. Si parla della cresima del cuginetto. "Il regalo lo facciamo insieme noi quattro, va bene? Centocinquanta è giusto." Quando mamma riattacca, papà alza la testa dal piatto. "Tre cresime e una comunione quest\'anno." Mamma sospira. "Lo so. Si va." Tu pensi che in famiglia non si litiga per i soldi, ma se ne parla in continuazione.',
  6:'Cucina, ultima settimana di scuola. Sul tavolo la pagella. I tuoi l\'hanno già letta. Si girano verso di te. "Sai cosa abbiamo notato? Non sono i voti. È che quest\'anno hai imparato a dire quando sei stanco. E quando vuoi che ti lasciamo in pace. È più importante." Per un secondo non hai parole.',
  7:'Cucina, una sera di luglio. Caldo. Le finestre tutte aperte. Mamma ha già preparato lo zaino dei libri per l\'anno prossimo: "Centottantaquattro euro solo di libri. E ho preso quelli usati." Papà guarda il <span class="gloss" data-g="bolletta">conguaglio</span> della luce. "Ci tocca darci una calmata col climatizzatore." Tu hai sudato già due magliette.',
  8:'Cucina, agosto. Tornati dalle vacanze ieri sera. Il bagagliaio era pieno di vestiti sporchi. Mamma sta facendo tre lavatrici di fila. "Però era bello." Papà ride. "Sì, era bello." Tu hai il sole sulla pelle e la sensazione strana di essere tornato in una vita che non è ancora ricominciata.',
  9:'Cucina, primo lunedì di settembre. Rientro a scuola. Mamma posa lo scontrino della cancelleria. Sessantadue euro. "Ma quanto costa la scuola, signora mia." Papà alza le sopracciglia. "Più di quando ci andavo io." Tu non dici niente: il tuo zaino è quello dell\'anno scorso. Tiene ancora.',
  10:'Cucina, ore venti di ottobre. La pioggia batte sulle finestre. Papà ha la posta aperta: <span class="gloss" data-g="bolletta">bolletta</span> gas e rinnovo dell\'<span class="gloss" data-g="assicurazione RCA">assicurazione</span>. Quattrocentoventi euro entro la fine del mese. "L\'anno scorso era trecentottanta." Mamma scrolla le spalle: "Tutto sale".',
  11:'Cucina, sera tardi di novembre. Papà ha aperto la <span class="gloss" data-g="bolletta">bolletta</span>. Resta zitto. Mamma chiede piano: "Quanto?" "Trecentoquaranta. <span class="gloss" data-g="bimestre">A bimestre</span>." "L\'anno scorso?" "Duecentodieci." Pausa lunga. Il fratellino disegna sul foglio della bolletta stessa. Nessuno lo ferma.',
  12:'Cucina, sabato pomeriggio di dicembre. Quasi Natale. Mamma scrive la lista regali. Conta a voce alta: "Sei adulti, otto bambini, due colleghe, il portiere. Quattordici regali." Papà mette giù il caffè. "Massimo cinquanta a testa." La <span class="gloss" data-g="tredicesima">tredicesima</span> arriva, ma c\'è anche il bollo a febbraio. Mamma guarda fuori. La via è già piena di luci.'
};

/* BIVI */
const BIVI=[
  {id:'b_foglietto',titolo:'Il foglietto sotto il banco',scena:'Verifica di geografia, terza ora. Quindici minuti dalla fine. Il tuo compagno di banco ti guarda con gli occhi di chi non ha studiato. La sua mano scivola sotto il tavolo. Spinge il foglietto verso di te. La prof è girata verso la lavagna.',
    rami:[{let:'A',testo:'Sposto il mio foglio. Lui si arrangia.',eff:{disciplina:2,autonomia:1,relazioni:-2}},{let:'B',testo:'Lascio che copi. È il mio compagno.',eff:{slancio:1,disciplina:-2,relazioni:2}},{let:'C',testo:'Aspetto la fine. Glielo dirò dopo.',eff:{cura:2,coraggio_civile:1}}]},
  {id:'b_ipad',titolo:'La verità sull\'iPad',scena:'Lo schermo dell\'iPad si è incrinato stamattina, in cortile. Sai che fuori dall\'aula non si dovrebbe. Una palla è arrivata da non si sa dove. Crack. A cena, papà ti chiede com\'è andata a scuola.',
    rami:[{let:'A',testo:'Dico la verità. Era in cortile, mio errore.',eff:{coraggio_civile:3,autonomia:2,bilancio:-180}},{let:'B',testo:'Dico che è caduto in classe.',eff:{slancio:-1,disciplina:-2,bilancio:-180,legami:-3}},{let:'C',testo:'Non lo dico. Userò quello della scuola.',eff:{autonomia:1,slancio:2,legami:-5,bilancio:-180}}]},
  {id:'b_festa',titolo:'La festa nella cascina',scena:'Sara fa la festa sabato sera in una cascina fuori paese. Suo fratello ha vent\'anni, ha invitato amici suoi. I tuoi non sanno bene dove si trova questa cascina, e non sanno bene chi sarà. Mamma ti ha detto: "Decidi tu. Ma se vai, voglio sapere dove sei e a che ora torni."',
    rami:[{let:'A',testo:'Vado. Non dico tutto.',eff:{slancio:3,autonomia:1,legami:-4,energia:-10}},{let:'B',testo:'Vado, ma dico a mamma tutto.',eff:{coraggio_civile:2,autonomia:2,legami:3}},{let:'C',testo:'Non vado. Resto a casa.',eff:{disciplina:2,cura:1,legami:2}}]},
  {id:'b_screen',titolo:'Lo screenshot in chat',scena:'Sulla chat di classe arriva una foto. Scattata di nascosto in palestra. Si vede una tua compagna di taglio, mentre si cambia. Una raffica di emoji ridenti. Il telefono in mano. La chat continua a scorrere.',
    rami:[{let:'A',testo:'Metto un emoji. Non voglio essere lo strano.',eff:{slancio:1,coraggio_civile:-3,relazioni:-2}},{let:'B',testo:'Esco dal gruppo senza dire niente.',eff:{autonomia:1,coraggio_civile:1}},{let:'C',testo:'Scrivo alla compagna in privato.',eff:{coraggio_civile:3,cura:2}},{let:'D',testo:'Lo dico a un adulto: prof o genitori.',eff:{coraggio_civile:3,disciplina:2,cura:1}}]},
  {id:'b_amico',titolo:'L\'amico in difficoltà',scena:'Il tuo migliore amico ti dice piano, mentre tornate da scuola: "A casa, in questo periodo, è dura. Non ce la facciamo a venire allo skipass. Ma non lo dire a nessuno." La gita sulla neve è fra due settimane. Tu ci vai.',
    rami:[{let:'A',testo:'Mantengo il segreto. Vado. Gli racconto come è andata.',eff:{disciplina:1,cura:1,slancio:1}},{let:'B',testo:'Mantengo il segreto. Non vado nemmeno io. Sto con lui il sabato.',eff:{cura:4,coraggio_civile:2,slancio:-2,carta_ricordo:'sabato_amico'}},{let:'C',testo:'Parlo con i miei. C\'è un modo per aiutarlo?',eff:{coraggio_civile:3,cura:2,legami:2}}]},
  {id:'b_isolato',titolo:'Il compagno che mangia solo',scena:'Da settembre, Marco mangia il panino da solo, in fondo al corridoio. Tutti i giorni. È arrivato da poco. Tu hai un tuo gruppetto con cui mangi, da sempre.',
    rami:[{let:'A',testo:'Lo invito al mio gruppo.',eff:{coraggio_civile:3,cura:2}},{let:'B',testo:'A volte cambio posto e mi siedo accanto a lui.',eff:{cura:3,disciplina:1}},{let:'C',testo:'Lo segnalo alla prof.',eff:{cura:1,coraggio_civile:1}},{let:'D',testo:'Non faccio niente.',eff:{cura:-2}}]},
  {id:'b_portaf',titolo:'Il portafoglio sul marciapiede',scena:'Tornando da scuola, vicino alla farmacia, vedi un portafoglio per terra. Lo raccogli. Dentro: ottanta euro, una carta d\'identità di un signore di settant\'anni, una foto piccola di una bambina.',
    rami:[{let:'A',testo:'Lo lascio al bar lì accanto.',eff:{coraggio_civile:2,autonomia:1}},{let:'B',testo:'Lo porto ai Carabinieri.',eff:{coraggio_civile:3,autonomia:2,cura:1}},{let:'C',testo:'Prendo i contanti. Lascio il portafoglio.',eff:{slancio:2,coraggio_civile:-5,bilancio:80}},{let:'D',testo:'Lo lascio dov\'è.',eff:{coraggio_civile:-2}}]}
];

const RICHIESTE=[
  {id:'r_scarpe',label:'Scarpe da calcio nuove',costo:70,desc:'Le vecchie tengono ancora.'},
  {id:'r_neve',label:'Settimana bianca con la scuola',costo:420,desc:'Vanno tutti i compagni.'},
  {id:'r_telefono',label:'Smartphone nuovo (base)',costo:350,desc:'Quello vecchio funziona ancora.'},
  {id:'r_telefono_top',label:'Smartphone top di gamma',costo:900,desc:'Quello "di tutti".'},
  {id:'r_libro',label:'Libro per un progetto',costo:18,desc:'Per il progetto di italiano.'},
  {id:'r_cuffie',label:'Cuffie wireless',costo:130,desc:'Per studiare meglio.'},
  {id:'r_skin',label:'V-Bucks Fortnite',costo:25,desc:'<span class="gloss" data-g="microtransazione">Microtransazione</span> per una skin.'},
  {id:'r_pizza',label:'Pizzeria con amici',costo:15,desc:'Compleanno di un compagno.'}
];

const TRUFFE=[
  {id:'t_sms',tipo:'familiare',titolo:'SMS sul telefono di mamma',scena:'Mamma ti passa il telefono. SMS: "Banca Intesa: rilevato addebito sospetto di 489€. Clicca qui entro 1 ora: bit.ly/intesa-secure"',
    rami:[{let:'A',testo:'NON cliccare. È <span class="gloss" data-g="smishing">smishing</span>.',esito:'avvisato',delta:0},{let:'B',testo:'Clicco io per vedere.',esito:'caduto',delta:-350},{let:'C',testo:'Decide mamma.',esito:'non_avvisato',delta:-350}]},
  {id:'t_nonna',tipo:'familiare',titolo:'La telefonata alla nonna',scena:'Nonna ti chiama in lacrime: "Un signore mi ha detto che eri tu, incidente in auto, servono tremila euro di cauzione. Sta venendo a prenderli."',
    rami:[{let:'A',testo:'FERMATI. Sto bene. È una truffa nota.',esito:'avvisato',delta:0},{let:'B',testo:'Vengo subito da te.',esito:'avvisato',delta:0},{let:'C',testo:'Mi spavento, chiamo mamma.',esito:'caduto',delta:-2800}]},
  {id:'t_skin',tipo:'studente',titolo:'La skin gratis',scena:'Sito: "Skin esclusiva Fortnite GRATIS! Username Epic Games + piccola verifica."',
    rami:[{let:'A',testo:'Niente è gratis. Lascio perdere.',esito:'riconosciuta',delta:0},{let:'B',testo:'Provo. Account rubato.',esito:'caduto',delta:-50}]},
  {id:'t_lavoro',tipo:'studente',titolo:'Offerta lavoro a te',scena:'DM Instagram: "50€ al giorno da casa. Cauzione 30€ per i materiali."',
    rami:[{let:'A',testo:'Blocco e segnalo.',esito:'riconosciuta',delta:0},{let:'B',testo:'Ignoro.',esito:'riconosciuta',delta:0},{let:'C',testo:'Trenta euro, provo.',esito:'caduto',delta:-30}]}
];

const IMPREVISTI=[
  {id:'i_lavatrice',segno:'-',label:'Lavatrice rotta',desc:'La lavatrice ha mollato stamattina. Riparazione 220 euro.',delta:-220},
  {id:'i_auto',segno:'-',label:'Auto in panne',desc:'Si è fermata sul ciglio della strada. Carro attrezzi + meccanico: 380 euro.',delta:-380},
  {id:'i_dentista',segno:'-',label:'Dentista d\'urgenza',desc:'Tuo fratello ha rotto un dente cadendo dalla bici. 320 euro.',delta:-320},
  {id:'i_nonna',segno:'+',label:'La nonna regala 80€',desc:'La nonna è venuta a pranzo. "Per il tuo compleanno in anticipo."',delta:80},
  {id:'i_extra',segno:'+',label:'Lavoretto extra a papà',desc:'Un amico ha chiesto a papà di aiutarlo. 250 euro in più.',delta:250,energia:-5},
  {id:'i_ps',segno:'~',label:'Fratellino al PS',desc:'Caduto in cortile. Niente di grave, una notte al pronto soccorso. 40 euro. La famiglia si è stretta.',delta:-40,legami:4}
];

const SCENE_QUOTIDIANE=[
  'Cena veloce, tutti stanchi. Il fratellino racconta una cosa di scuola che fa ridere. Si mangia in mezz\'ora.',
  'A tavola si guarda il telegiornale. Papà commenta. Mamma corregge. Tu mangi e ascolti.',
  'Dopo cena, divano. Un film insieme: lo finite a metà perché tutti hanno sonno.',
  'Compiti del giorno dopo a tavola: il fratellino fa fatica con la divisione. Mamma lo aiuta. Papà ti chiede com\'è andata.',
  'Sera silenziosa. Ognuno fa la sua cosa: papà su YouTube, mamma legge, fratellino disegna. Tu in camera.',
  'Telefonata della nonna sul vivavoce. Aggiornamenti su tutti i parenti. Mamma sospira. Papà ride.',
  'Si decide il pranzo della domenica con la zia. "Lasagne?" "Lasagne." Si chiude lì.',
  'Tutti a letto presto. Domani sveglia alle sei e mezza. La giornata è stata pesante.',
  'Mamma e papà parlano in cucina dopo cena. Tu fai i compiti in camera. Senti i loro toni: tranquilli.',
  'Cena con tua sorella che racconta una cosa di scuola. Tutti ridono. Anche papà, che era stanco.'
];

const SOGLIE={
  studio:[{max:30,q:'in difficoltà',cls:'warn',desc:'Stai indietro.'},{max:50,q:'incerto',cls:'',desc:'Sei nella media.'},{max:75,q:'preparato',cls:'',desc:'Studi bene.'},{max:100,q:'molto preparato',cls:'good',desc:'Ferrato.'}],
  forma:[{max:30,q:'in calo',cls:'warn',desc:'Trascuri il corpo.'},{max:60,q:'nella media',cls:'',desc:'Reggi gli sforzi normali.'},{max:85,q:'in forma',cls:'',desc:'Stai bene.'},{max:100,q:'al massimo',cls:'good',desc:'Al picco.'}],
  energia:[{max:25,q:'esausto',cls:'warn',desc:'Decidi male.'},{max:50,q:'stanco',cls:'',desc:'Ti serve calma.'},{max:75,q:'in ritmo',cls:'',desc:'Reggi bene.'},{max:100,q:'carico',cls:'good',desc:'Lucidità.'}],
  relazioni:[{max:30,q:'tese',cls:'warn',desc:'Attriti.'},{max:55,q:'normali',cls:'',desc:'Né bene né male.'},{max:80,q:'serene',cls:'',desc:'Si sta bene.'},{max:100,q:'molto strette',cls:'good',desc:'Rapporto profondo.'}],
  bilancio:[{max:300,q:'in difficoltà',cls:'warn',desc:'Resta poco.'},{max:700,q:'teso',cls:'',desc:'A fine mese giusto.'},{max:1500,q:'regolare',cls:'',desc:'Ce la fa.'},{max:99999,q:'tranquillo',cls:'good',desc:'Cuscino di sicurezza.'}],
  legami:[{max:30,q:'distanti',cls:'warn',desc:'Si convive, poco di più.'},{max:60,q:'normali',cls:'',desc:'Famiglia che funziona.'},{max:85,q:'stretti',cls:'',desc:'Calore in casa.'},{max:100,q:'profondi',cls:'good',desc:'Una famiglia che si vede.'}]
};
const TRATTI_LABEL={disciplina:'Disciplina',slancio:'Slancio',coraggio_civile:'Coraggio civile',cura:'Cura',autonomia:'Autonomia'};

/* STATE */
const STATE={
  classe:null,famigliaId:null,mese:null,profiloMaterie:{},cambioFamUsato:false,
  giornoIdx:0,faseIdx:0,
  ind:{studio:50,forma:50,energia:70,relazioni:60,bilancio:0,legami:50},
  tratti:{disciplina:0,slancio:0,coraggio_civile:0,cura:0,autonomia:0},
  voti:{ITA:[],MAT:[],ING:[],SCI:[],STO:[],TEC:[],MOT:[],ARTE:[]},
  votiSettimana:{},  // {settimanaIdx: {matId: [voti]}}
  carteRicordo:[],biviFatti:[],richiesteFatte:[],truffeFatte:[],imprevistiFatti:[],
  faseCompletata:false,meseEventi:{cucinaFatte:false},_compitiCorrenti:null,_pomLiberoSelezionato:false
};

/* UTILITY */
function $(s){return document.querySelector(s)}
function $$(s){return Array.from(document.querySelectorAll(s))}
function vai(id){$$('.screen').forEach(s=>s.classList.remove('active'));$('#'+id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'})}
function rand(arr){return arr[Math.floor(Math.random()*arr.length)]}
function clamp(v,a,b){return Math.max(a,Math.min(b,v))}
function applicaEffetti(eff){
  if(!eff)return;
  for(const k in eff){
    if(k==='voto')continue;
    if(k==='carta_ricordo'){STATE.carteRicordo.push(eff[k]);continue}
    if(k==='bilancio'){STATE.ind.bilancio=Math.max(0,STATE.ind.bilancio+eff[k]);continue}
    if(k==='legami'){STATE.ind.legami=clamp(STATE.ind.legami+eff[k],0,100);continue}
    if(k in STATE.ind){STATE.ind[k]=clamp(STATE.ind[k]+eff[k],0,100);continue}
    if(k in STATE.tratti){STATE.tratti[k]=Math.max(0,STATE.tratti[k]+eff[k])}
  }
}
function trattoDominante(){let m=-1,d='';for(const k in STATE.tratti)if(STATE.tratti[k]>m){m=STATE.tratti[k];d=k}return d}
function trattoSecondo(){const dom=trattoDominante();let m=-1,s='';for(const k in STATE.tratti){if(k===dom)continue;if(STATE.tratti[k]>m){m=STATE.tratti[k];s=k}}return s}
function settimanaIdx(){return Math.floor(STATE.giornoIdx/7)}
function giornoSettimana(){return STATE.giornoIdx%7}
function isWeekend(){return giornoSettimana()>=5}
function isDomenica(){return giornoSettimana()===6}
function isUltimaDom(){return STATE.giornoIdx===27}

/* INDICATORI */
function valutaSoglia(c,v){for(const s of SOGLIE[c])if(v<=s.max)return s;return SOGLIE[c][SOGLIE[c].length-1]}
const PREV_IND={};
const ICONE_IND={studio:'iconoir-book',forma:'iconoir-running',energia:'iconoir-flash',relazioni:'iconoir-heart',bilancio:'iconoir-coin',legami:'iconoir-home'};
function renderIndicators(){
  const root=$('#indicators');const ind=STATE.ind;
  const ist=(c,lbl,v,fam)=>{
    const s=valutaSoglia(c,v);const prev=PREV_IND[c];let f='';
    if(prev!==undefined&&v!==prev)f=v>prev?'<span class="indicator-arrow up">↑</span>':'<span class="indicator-arrow down">↓</span>';
    PREV_IND[c]=v;
    const numTxt=c==='bilancio'?v+' €':v+'/100';
    return `<div class="indicator ${fam?'fam':''} ${s.cls}" data-c="${c}">${f}<i class="${ICONE_IND[c]} indicator-icon"></i><div class="indicator-label">${lbl}</div><div class="indicator-quale">${s.q}</div><div class="indicator-num">${numTxt}</div></div>`;
  };
  root.innerHTML=ist('studio','Studio',ind.studio)+ist('forma','Forma',ind.forma)+ist('energia','Energia',ind.energia)+ist('relazioni','Relazioni',ind.relazioni)+ist('bilancio','Bilancio',ind.bilancio,true)+ist('legami','Legami',ind.legami,true);
  $$('#indicators .indicator').forEach(el=>{
    el.addEventListener('click',e=>{
      e.stopPropagation();const c=el.dataset.c;const v=ind[c];const s=valutaSoglia(c,v);
      const popup=$('#glossPopup');$('#glossTitle').textContent=c.toUpperCase();
      $('#glossDef').innerHTML=`<strong style="color:var(--ocra)">${s.q.toUpperCase()}</strong> <span style="font-family:'JetBrains Mono';font-size:.8rem;opacity:.6">${c==='bilancio'?v+' €':v+'/100'}</span><br><br>${s.desc}`;
      $('#glossEx').textContent='';popup.style.display='block';
      const r=el.getBoundingClientRect();let t=r.bottom+6,l=r.left;
      if(t+200>window.innerHeight)t=r.top-200;if(l+300>window.innerWidth)l=window.innerWidth-310;
      popup.style.top=t+'px';popup.style.left=l+'px';
    });
  });
}

function renderProgress(){
  const root=$('#progressGiorni');let html='';
  for(let s=0;s<4;s++){
    html+='<div class="progress-settimana">';
    for(let g=0;g<7;g++){
      const idx=s*7+g;let cls='progress-giorno';
      if(idx<STATE.giornoIdx)cls+=' done';
      else if(idx===STATE.giornoIdx)cls+=' now';
      html+=`<div class="${cls}"></div>`;
    }
    html+='</div>';
    if(s<3)html+='<div class="progress-sep"></div>';
  }
  root.innerHTML=html;
}

/* SETUP */
function buildClassi(){$('#classiGrid').innerHTML=CLASSI.map(cl=>`<button class="classe-btn" data-cl="${cl}" onclick="selClasse('${cl}')">${cl}</button>`).join('')}
function selClasse(cl){STATE.classe=cl;$$('.classe-btn').forEach(b=>b.classList.toggle('attiva',b.dataset.cl===cl));$('#btnAvantiClasse').disabled=false}

/* SLOT FAMIGLIA */
const FAM_IDS=Object.keys(FAMIGLIE);
function popolaSlotFamiglia(){['slotFamA','slotFamB','slotFamC'].forEach(id=>{
  const strip=$('#'+id);const lista=[];for(let i=0;i<24;i++)lista.push(rand(FAM_IDS));
  strip.innerHTML=lista.map(fid=>`<div class="slot-tessera">${FAMIGLIE[fid].nome}</div>`).join('');
  strip.style.transform='translateY(0)';
})}
function tiraSlotFamiglia(){
  $('#btnSlotFam').disabled=true;$('#slotFamRisultato').classList.remove('show');
  const idEstratto=rand(FAM_IDS);STATE.famigliaId=idEstratto;
  ['slotFamA','slotFamB','slotFamC'].forEach((id,idx)=>{
    const strip=$('#'+id);const items=[];
    for(let i=0;i<20+idx*3;i++)items.push(rand(FAM_IDS));
    items.push(idEstratto);
    strip.innerHTML=items.map(fid=>`<div class="slot-tessera">${FAMIGLIE[fid].nome}</div>`).join('');
    strip.style.transition='none';strip.style.transform='translateY(0)';
    void strip.offsetWidth;
    strip.style.transition=`transform ${1.5+idx*0.4}s cubic-bezier(.16,.7,.2,1)`;
    strip.style.transform=`translateY(${-(items.length-1)*90}px)`;
  });
  setTimeout(()=>{
    const f=FAMIGLIE[idEstratto];
    $('#slotFamRisultato').innerHTML=`Ti tocca la <strong>famiglia ${f.nome}</strong>.<br><span style="opacity:.75;font-size:1.1rem;">${f.tag}</span>`;
    $('#slotFamRisultato').classList.add('show');
    if(!STATE.cambioFamUsato)$('#btnCambioFam').style.display='inline-flex';
    $('#btnAccettaFam').style.display='inline-flex';
    TELE.slot({tipo:'famiglia',valore:f.nome});
  },2400);
}
function cambiaFamiglia(){
  STATE.cambioFamUsato=true;
  $('#btnCambioFam').style.display='none';$('#btnAccettaFam').style.display='none';
  $('#btnSlotFam').disabled=false;$('#slotFamRisultato').classList.remove('show');
  $('#btnSlotFam').textContent='Tira (ultima volta)';
}

/* SLOT MESE */
function tiraSlotMese(){
  $('#btnSlotMese').disabled=true;$('#slotMeseRisultato').classList.remove('show');
  const meseEstratto=1+Math.floor(Math.random()*12);STATE.mese=meseEstratto;
  const strip=$('#slotMese');const items=[];
  for(let i=0;i<25;i++)items.push(1+Math.floor(Math.random()*12));
  items.push(meseEstratto);
  strip.innerHTML=items.map(m=>`<div class="slot-tessera mese">${MESI[m]}</div>`).join('');
  strip.style.transition='none';strip.style.transform='translateY(0)';
  void strip.offsetWidth;
  strip.style.transition='transform 2s cubic-bezier(.16,.7,.2,1)';
  strip.style.transform=`translateY(${-(items.length-1)*90}px)`;
  setTimeout(()=>{
    $('#slotMeseRisultato').innerHTML=`Vivrai un mese di <strong>${MESI[meseEstratto]}</strong>.<br><span style="opacity:.75;font-size:1.1rem;">${sottotitoloMese(meseEstratto)}</span>`;
    $('#slotMeseRisultato').classList.add('show');
    $('#btnAccettaMese').style.display='inline-flex';
    TELE.slot({tipo:'mese',valore:MESI[meseEstratto]});
  },2200);
}
function sottotitoloMese(m){
  const t={1:'Il mese più costoso dell\'anno.',2:'Si vede una luce.',3:'Primavera. Si guarda avanti.',4:'Pasqua. La scuola accelera.',5:'Pagelle, cresime, esami in vista.',6:'Si chiude. Si saluta.',7:'Estate. I conguagli arrivano.',8:'Ferie e rientri.',9:'Si comincia.',10:'Le bollette tornano.',11:'Si pianifica Natale.',12:'Natale. Famiglia, regali, conti.'};
  return t[m]||'';
}

/* SLOT MATERIE — sorteggio destino */
function popolaSlotMaterie(){
  const root=$('#slotMaterieAnim');let html='';
  MATERIE_IDS.forEach(mid=>{html+=`<div class="slot-rotella" style="width:88px;height:80px"><div class="slot-strip" id="slotMat_${mid}"></div></div>`});
  root.innerHTML=html;
  MATERIE_IDS.forEach(mid=>{
    const strip=$('#slotMat_'+mid);
    const items=[];const moods=['luminosa','neutra','neutra','ombra'];
    for(let i=0;i<20;i++)items.push(rand(moods));
    strip.innerHTML=items.map(()=>`<div class="slot-tessera materia"><div><i class="${MATERIE[mid].icon}" style="font-size:1rem;display:block"></i>${MATERIE[mid].nome.split(' ')[0]}</div></div>`).join('');
    strip.style.transform='translateY(0)';
  });
}
function tiraSlotMaterie(){
  $('#btnSlotMaterie').disabled=true;$('#slotMaterieRisultato').classList.remove('show');
  const shuffled=[...MATERIE_IDS].sort(()=>Math.random()-0.5);
  STATE.profiloMaterie={};
  shuffled.slice(0,2).forEach(mid=>STATE.profiloMaterie[mid]='luminosa');
  shuffled.slice(2,6).forEach(mid=>STATE.profiloMaterie[mid]='neutra');
  shuffled.slice(6,8).forEach(mid=>STATE.profiloMaterie[mid]='ombra');
  MATERIE_IDS.forEach((mid,idx)=>{
    const strip=$('#slotMat_'+mid);
    const mood=STATE.profiloMaterie[mid];
    const items=[];const moodOpts=['luminosa','neutra','neutra','ombra'];
    for(let i=0;i<15+idx;i++)items.push(rand(moodOpts));
    items.push(mood);
    strip.innerHTML=items.map(mo=>{
      const col=mo==='luminosa'?'color:var(--oro)':(mo==='ombra'?'color:var(--grafite)':'color:var(--terra)');
      return `<div class="slot-tessera materia"><div><i class="${MATERIE[mid].icon}" style="font-size:1rem;display:block;${col}"></i><span style="${col}">${MATERIE[mid].nome.split(' ')[0]}</span></div></div>`;
    }).join('');
    strip.style.transition='none';strip.style.transform='translateY(0)';
    void strip.offsetWidth;
    strip.style.transition=`transform ${1.2+idx*0.15}s cubic-bezier(.16,.7,.2,1)`;
    strip.style.transform=`translateY(${-(items.length-1)*80}px)`;
  });
  setTimeout(()=>{
    const lumini=Object.keys(STATE.profiloMaterie).filter(m=>STATE.profiloMaterie[m]==='luminosa').map(m=>MATERIE[m].nome);
    const ombre=Object.keys(STATE.profiloMaterie).filter(m=>STATE.profiloMaterie[m]==='ombra').map(m=>MATERIE[m].nome);
    $('#slotMaterieRisultato').innerHTML=`Sei portato per: <strong>${lumini.join(' e ')}</strong>.<br>Ti pesano: <strong>${ombre.join(' e ')}</strong>.`;
    $('#slotMaterieRisultato').classList.add('show');
    $('#btnAccettaMaterie').style.display='inline-flex';
    TELE.slot({tipo:'materie',valore:JSON.stringify(STATE.profiloMaterie)});
    aggiornaBriefing();
  },2500);
}
function aggiornaBriefing(){
  const f=FAMIGLIE[STATE.famigliaId];STATE.ind.bilancio=f.bilancio;
  $('#briefScheda').innerHTML=`<div class="nome">Famiglia ${f.nome}</div><div class="tag">${f.tag}</div><div class="scheda-corpo">${f.scheda}</div>`;
  $('#briefMaterieProf').innerHTML=MATERIE_IDS.map(mid=>{
    const m=MATERIE[mid];const mood=STATE.profiloMaterie[mid];
    const moodLabel=mood==='luminosa'?'luminosa':(mood==='ombra'?'in ombra':'neutra');
    return `<div class="materia-card ${mood}"><i class="${m.icon} materia-icon"></i><div class="materia-nome">${m.nome}</div><div class="materia-mood">${moodLabel}</div></div>`;
  }).join('');
}

/* INIZIO PARTITA */
function iniziaPartita(){
  const sid=TELE.start(STATE.classe,FAMIGLIE[STATE.famigliaId].nome);
  $('#topbarSid').textContent=STATE.classe+' • ID '+sid;
  STATE.giornoIdx=0;STATE.faseIdx=0;
  apriGiorno();
}

/* APERTURA GIORNO */
function apriGiorno(){
  vai('screen-giorno');
  renderProgress();renderIndicators();renderQuadro();
  const gSett=giornoSettimana();
  $('#giornoEyebrow').textContent=`Settimana ${settimanaIdx()+1} di 4 — giorno ${STATE.giornoIdx+1} di 28`;
  $('#giornoTitolo').textContent=GIORNI_NOMI[gSett];
  $('#giornoData').textContent=MESI[STATE.mese];
  ['faseTabMat','faseTabPom','faseTabSer'].forEach((id,i)=>{
    const el=$('#'+id);
    el.className='fase-tab';
    if(i<STATE.faseIdx)el.classList.add('fatto');
    if(i===STATE.faseIdx)el.classList.add('attiva');
  });
  $('#faseTabMat').innerHTML='<i class="iconoir-sun-light"></i> Mattino';
  $('#faseTabPom').innerHTML='<i class="iconoir-half-moon"></i> Pomeriggio';
  $('#faseTabSer').innerHTML='<i class="iconoir-moon-sat"></i> Sera';
  renderFase();
}

function renderQuadro(){
  const root=$('#quadroBox');
  if(settimanaIdx()<1){root.innerHTML='';return}
  const f=FAMIGLIE[STATE.famigliaId];
  const casaLabel=f.casa==='affitto'?`In affitto (<span class="gloss" data-g="rata">rata</span> ${f.affitto_rata} €/mese)`:f.casa==='proprietà_mutuo'?`In proprietà con <span class="gloss" data-g="mutuo">mutuo</span> (rata ${f.mutuo_rata} €/mese)`:`In proprietà — valore ${f.valore_casa.toLocaleString('it-IT')} €`;
  root.innerHTML=`<div class="quadro"><div class="quadro-titolo">Il Quadro</div><div class="quadro-sottotit">La situazione di casa.</div><div class="quadro-riga"><span class="quadro-riga-label"><i class="iconoir-home"></i> Casa</span><span class="quadro-riga-val">${casaLabel}</span></div><div class="quadro-riga"><span class="quadro-riga-label"><i class="iconoir-coin"></i> Conto</span><span class="quadro-riga-val">${STATE.ind.bilancio} €</span></div><div class="quadro-riga"><span class="quadro-riga-label"><i class="iconoir-piggy-bank"></i> Risparmi</span><span class="quadro-riga-val">${f.risparmi} €</span></div></div>`;
}

/* RENDER FASE */
function renderFase(){
  STATE.faseCompletata=false;$('#btnFaseAvanti').disabled=true;
  if(STATE.faseIdx===0)renderMattino();
  else if(STATE.faseIdx===1)renderPomeriggio();
  else renderSera();
}

/* MATTINO */
function renderMattino(){
  const gSett=giornoSettimana();
  if(gSett>=5){
    $('#faseBox').innerHTML=`<div class="foglietto foglietto-quotidiano"><span class="foglietto-tag"><i class="iconoir-sun-light"></i> Mattino</span><div class="foglietto-titolo">${gSett===5?'Sabato mattina':'Domenica mattina'}</div><div class="foglietto-corpo"><p>${gSett===5?'Sveglia tardi. Niente scuola. La casa è silenziosa fino alle dieci, poi mamma si alza. Il fratellino guarda i cartoni.':'Domenica. Messa con i nonni alle undici. Pranzo lungo. Pomeriggio in salotto.'}</p></div></div>`;
    STATE.faseCompletata=true;$('#btnFaseAvanti').disabled=false;return;
  }
  const orarioGiorno=ORARIO[gSett];
  let html='';
  orarioGiorno.forEach((matId,i)=>{
    const mat=MATERIE[matId];const mood=STATE.profiloMaterie[matId];
    const arg=mat.arg[Math.floor(Math.random()*mat.arg.length)];
    const microEvent=Math.random()<0.65?rand(MICRO_LEZIONI):null;
    html+=`<div class="lezione ${mood}" data-i="${i}" data-mat="${matId}"><div class="lezione-ora">${ORE_INIZIO[i]}<br><span style="opacity:.6;font-size:.7rem">${i+1}ª</span></div><div class="lezione-corpo"><div class="lezione-tit"><i class="${mat.icon}" style="font-size:1.1rem;color:var(--terra)"></i>${mat.nome}<span class="lezione-mood-badge ${mood}">${mood==='luminosa'?'luminosa':'in ombra'}</span></div><div class="lezione-prof">${mat.prof}</div><div class="lezione-arg">${arg}</div>${microEvent?`<div class="microE" data-evt="${microEvent.id}"><p class="lezione-arg" style="font-weight:600">${microEvent.titolo}.</p><p class="lezione-arg" style="font-style:normal">${microEvent.testo}</p><div class="lezione-rami">${microEvent.rami.map((r,j)=>`<button class="lezione-ramo" data-r="${j}"><span class="foglietto-ramo-let">${r.let}</span>${r.testo}</button>`).join('')}</div></div>`:'<div class="lezione-fb">Lezione tranquilla. Si studia, si ascolta. Nessuna sorpresa.</div>'}</div></div>`;
  });
  $('#faseBox').innerHTML=html;
  const lezioni=$$('#faseBox .lezione');let lezioniRisolte=0;
  lezioni.forEach(lEl=>{
    if(!lEl.querySelector('.microE')){
      lEl.classList.add('fatta');lezioniRisolte++;
      const matId=lEl.dataset.mat;const mood=STATE.profiloMaterie[matId];
      if(mood==='luminosa')STATE.ind.studio=clamp(STATE.ind.studio+1,0,100);
      STATE.ind.energia=clamp(STATE.ind.energia-1,0,100);
    }else{
      lEl.querySelectorAll('[data-r]').forEach(btn=>{btn.onclick=()=>risolviMicroLezione(lEl,btn)});
    }
  });
  if(lezioniRisolte===6){STATE.faseCompletata=true;$('#btnFaseAvanti').disabled=false;renderIndicators()}
}

function risolviMicroLezione(lEl,btn){
  const matId=lEl.dataset.mat;const mood=STATE.profiloMaterie[matId];
  const evtId=lEl.querySelector('.microE').dataset.evt;
  const evt=MICRO_LEZIONI.find(m=>m.id===evtId);
  const ramoIdx=parseInt(btn.dataset.r);const ramo=evt.rami[ramoIdx];
  const effKey=mood==='luminosa'?'eff_l':(mood==='ombra'?'eff_o':'eff_n');
  const eff=ramo[effKey]||{};
  let voto=null;
  if(eff.voto!==undefined){
    voto=eff.voto;
    STATE.voti[matId].push(voto);
    const sIdx=settimanaIdx();
    if(!STATE.votiSettimana[sIdx])STATE.votiSettimana[sIdx]={};
    if(!STATE.votiSettimana[sIdx][matId])STATE.votiSettimana[sIdx][matId]=[];
    STATE.votiSettimana[sIdx][matId].push(voto);
    TELE.voto({mese:STATE.mese,giorno:STATE.giornoIdx+1,materia:matId,voto:voto,mood:mood});
    if(voto>=8)STATE.ind.studio=clamp(STATE.ind.studio+2,0,100);
    else if(voto<=4)STATE.ind.studio=clamp(STATE.ind.studio-3,0,100);
  }
  const effPuri={};for(const k in eff){if(k!=='voto')effPuri[k]=eff[k]}
  applicaEffetti(effPuri);
  TELE.materia({mese:STATE.mese,giorno:STATE.giornoIdx+1,materia:matId,mood:mood,microevento:evtId,ramo:ramo.let,voto:voto});
  const microE=lEl.querySelector('.microE');
  const fb=document.createElement('div');fb.className='lezione-fb';
  let fbTxt='';
  if(voto!==null){const cls=voto<=4?'basso':(voto<=6?'medio':'alto');fbTxt=`Voto: <span class="voto-bubble ${cls}">${voto}</span> &nbsp; `}
  if(mood==='luminosa')fbTxt+='Sei nel tuo elemento — '+(voto&&voto>=7?'ti viene naturale.':'comunque dignità.');
  else if(mood==='ombra')fbTxt+='Fatica vera — '+(voto&&voto<=5?'è andata come temevi.':'ti sei salvato.');
  else fbTxt+='Lezione normale.';
  fb.innerHTML=fbTxt;microE.appendChild(fb);
  microE.querySelectorAll('button').forEach(b=>{b.disabled=true;b.style.opacity='0.5';b.style.pointerEvents='none'});
  lEl.classList.add('fatta');
  const tutte=$$('#faseBox .lezione').filter(l=>!l.classList.contains('fatta'));
  if(tutte.length===0){STATE.faseCompletata=true;$('#btnFaseAvanti').disabled=false}
  renderIndicators();
}

/* POMERIGGIO */
function renderPomeriggio(){
  STATE._pomLiberoSelezionato=false;
  const gSett=giornoSettimana();
  if(gSett>=5){
    $('#faseBox').innerHTML=`<div class="pom-intro"><strong>${gSett===5?'Sabato':'Domenica'} pomeriggio.</strong> Niente compiti urgenti. Decidi tu cosa fare.</div><div class="pom-libero"><div class="pom-libero-tit">Come passi il pomeriggio?</div><div class="pom-libero-istr">Una scelta sola.</div><div class="slot-libero-grid" id="slotLiberoGrid"></div></div>`;
    buildSlotLibero(true);return;
  }
  const orarioGiorno=ORARIO[gSett];
  const compitiOggi=[];
  orarioGiorno.forEach(matId=>{
    if(compitiOggi.length>=6)return;
    const tpl=COMPITI_TEMPLATE[matId];
    if(tpl && Math.random()<0.7){const c=rand(tpl);compitiOggi.push({mat:matId,desc:c.desc,t:c.t})}
  });
  while(compitiOggi.length<3){
    const matId=rand(orarioGiorno);const tpl=COMPITI_TEMPLATE[matId];
    if(tpl){const c=rand(tpl);compitiOggi.push({mat:matId,desc:c.desc,t:c.t})}
  }
  const tempoTot=120;
  let html=`<div class="pom-intro"><strong>Pomeriggio a casa.</strong> Sul tavolo i compiti del giorno. Hai circa <strong>${tempoTot} minuti</strong> prima di cena. Non riesci a farli tutti. Scegli.</div><div class="pom-tempo"><span>Tempo speso</span><span class="pom-tempo-num" id="pomTempoUsato">0 / ${tempoTot} min</span></div>`;
  compitiOggi.forEach((c,i)=>{
    const mat=MATERIE[c.mat];
    html+=`<div class="compito" data-i="${i}" data-mat="${c.mat}" data-t="${c.t}"><div class="compito-check"></div><div class="compito-corpo"><div class="compito-mat"><i class="${mat.icon}"></i> ${mat.nome}</div><div class="compito-desc">${c.desc}<span class="compito-tempo">${c.t} min</span></div></div></div>`;
  });
  html+=`<div class="pom-libero"><div class="pom-libero-tit">E il tempo che ti avanza?</div><div class="pom-libero-istr">Scegli cosa fare prima di cena.</div><div class="slot-libero-grid" id="slotLiberoGrid"></div></div>`;
  $('#faseBox').innerHTML=html;
  let tempoUsato=0;let compitiScelti=[];
  $$('#faseBox .compito').forEach(el=>{
    el.onclick=()=>{
      const i=parseInt(el.dataset.i);const t=parseInt(el.dataset.t);
      if(el.classList.contains('scelto')){el.classList.remove('scelto');tempoUsato-=t;compitiScelti=compitiScelti.filter(x=>x!==i)}
      else{if(tempoUsato+t>tempoTot)return;el.classList.add('scelto');tempoUsato+=t;compitiScelti.push(i)}
      $('#pomTempoUsato').textContent=tempoUsato+' / '+tempoTot+' min';
      $$('#faseBox .compito').forEach(el2=>{
        if(el2.classList.contains('scelto'))return;
        const t2=parseInt(el2.dataset.t);
        if(tempoUsato+t2>tempoTot)el2.classList.add('troppo-lungo');
        else el2.classList.remove('troppo-lungo');
      });
      STATE._compitiCorrenti={tutti:compitiOggi,scelti:compitiScelti};
    };
  });
  buildSlotLibero(false);
}

function buildSlotLibero(weekend){
  const opts=weekend?[
    {id:'amici',nome:'Esci con gli amici',icon:'iconoir-group',dett:'+relazioni, -energia',eff:{relazioni:5,energia:-8}},
    {id:'famiglia',nome:'Stai in famiglia',icon:'iconoir-home',dett:'+legami',eff:{legami:4,energia:2}},
    {id:'sport',nome:'Sport libero',icon:'iconoir-running',dett:'+forma, -energia',eff:{forma:6,energia:-6}},
    {id:'riposo',nome:'Riposo',icon:'iconoir-bed',dett:'+energia',eff:{energia:10}},
    {id:'studio',nome:'Studio extra',icon:'iconoir-book',dett:'+studio, -energia',eff:{studio:5,energia:-4}}
  ]:[
    {id:'amici',nome:'Dagli amici',icon:'iconoir-group',dett:'+relazioni',eff:{relazioni:3,energia:-5}},
    {id:'famiglia',nome:'Coi miei',icon:'iconoir-home',dett:'+legami',eff:{legami:3,energia:1}},
    {id:'riposo',nome:'TV / riposo',icon:'iconoir-tv',dett:'+energia',eff:{energia:6}},
    {id:'studio',nome:'Studio extra',icon:'iconoir-book',dett:'+studio',eff:{studio:4,energia:-3}}
  ];
  $('#slotLiberoGrid').innerHTML=opts.map(o=>`<div class="slot-libero" data-id="${o.id}"><span class="slot-libero-icon"><i class="${o.icon}"></i></span><span>${o.nome}</span><div class="slot-libero-dett">${o.dett}</div></div>`).join('');
  $$('#slotLiberoGrid .slot-libero').forEach(el=>{
    el.onclick=()=>{
      if(STATE._pomLiberoSelezionato)return;
      STATE._pomLiberoSelezionato=true;
      $$('#slotLiberoGrid .slot-libero').forEach(e=>e.classList.remove('scelto'));
      el.classList.add('scelto');
      const o=opts.find(x=>x.id===el.dataset.id);
      risolviPomeriggio(o);
    };
  });
}

function risolviPomeriggio(slotLibero){
  if(STATE._compitiCorrenti){
    const{tutti,scelti}=STATE._compitiCorrenti;
    tutti.forEach((c,i)=>{
      if(!scelti.includes(i)){TELE.compito({mese:STATE.mese,giorno:STATE.giornoIdx+1,materia:c.mat,esito:'saltato',desc:c.desc})}
      else{TELE.compito({mese:STATE.mese,giorno:STATE.giornoIdx+1,materia:c.mat,esito:'fatto',desc:c.desc});STATE.ind.studio=clamp(STATE.ind.studio+1,0,100)}
    });
    STATE._compitiCorrenti=null;
  }
  applicaEffetti(slotLibero.eff);renderIndicators();
  STATE.faseCompletata=true;$('#btnFaseAvanti').disabled=false;
}

/* SERA */
function renderSera(){
  const root=$('#faseBox');root.innerHTML='';
  let eventiAttesi=0,eventiCompletati=0;
  const completa=()=>{eventiCompletati++;if(eventiCompletati>=eventiAttesi){STATE.faseCompletata=true;$('#btnFaseAvanti').disabled=false}};
  if(STATE.giornoIdx===1 && !STATE.meseEventi.cucinaFatte){STATE.meseEventi.cucinaFatte=true;appendiCucina(root)}
  const isDom=isDomenica();
  if(!isDom && STATE.biviFatti.length<3 && Math.random()<0.18){
    const c=BIVI.filter(b=>!STATE.biviFatti.includes(b.id));
    if(c.length>0){eventiAttesi++;appendiBivio(root,rand(c),completa)}
  }
  if(!isDom && STATE.richiesteFatte.length<3 && Math.random()<0.22){
    const c=RICHIESTE.filter(r=>!STATE.richiesteFatte.includes(r.id));
    if(c.length>0){eventiAttesi++;appendiRichiesta(root,rand(c),completa)}
  }
  if(!isDom && STATE.truffeFatte.length<2 && Math.random()<0.15){
    const c=TRUFFE.filter(t=>!STATE.truffeFatte.includes(t.id));
    if(c.length>0){eventiAttesi++;appendiTruffa(root,rand(c),completa)}
  }
  if(!isDom && STATE.imprevistiFatti.length<3 && Math.random()<0.20){
    const c=IMPREVISTI.filter(i=>!STATE.imprevistiFatti.includes(i.id));
    if(c.length>0){eventiAttesi++;appendiImprevisto(root,rand(c),completa)}
  }
  if(isDom){eventiAttesi++;appendiPagellaSettimanale(root,completa)}
  if(isUltimaDom()){eventiAttesi++;appendiBustaPaga(root,completa)}
  if(eventiAttesi===0){
    const s=rand(SCENE_QUOTIDIANE);
    root.innerHTML+=`<div class="foglietto foglietto-quotidiano"><span class="foglietto-tag"><i class="iconoir-moon-sat"></i> Stasera</span><div class="foglietto-corpo"><p>${s}</p></div></div>`;
    STATE.faseCompletata=true;$('#btnFaseAvanti').disabled=false;
  }
}

function appendiCucina(root){
  const s=SCENE_CUCINA[STATE.mese];if(!s)return;
  const d=document.createElement('div');d.className='foglietto foglietto-cucina';
  d.innerHTML=`<span class="foglietto-tag"><i class="iconoir-coffee-cup"></i> In cucina</span><div class="foglietto-corpo"><p>${s}</p></div>`;
  root.appendChild(d);
}

function appendiBivio(root,b,onDone){
  const d=document.createElement('div');d.className='foglietto foglietto-bivio';
  d.innerHTML=`<span class="foglietto-tag" style="background:var(--rosso)"><i class="iconoir-twin-tower"></i> Una scelta</span><div class="foglietto-titolo">${b.titolo}</div><div class="foglietto-corpo"><p><em>Una decisione che lascerà il segno.</em></p></div><div class="foglietto-rami"><button class="foglietto-ramo" data-go="open">Affronta la scelta →</button></div>`;
  root.appendChild(d);
  d.querySelector('[data-go]').onclick=()=>{
    $('#bivioTitolo').textContent=b.titolo;
    $('#bivioScena').innerHTML=`<p>${b.scena}</p>`;
    const ramRoot=$('#bivioRami');ramRoot.innerHTML='';
    const t0=Date.now();
    b.rami.forEach(r=>{
      const btn=document.createElement('button');btn.className='bivio-ramo';
      btn.innerHTML=`<span class="bivio-ramo-let">${r.let}</span>${r.testo}`;
      btn.onclick=()=>{
        applicaEffetti(r.eff);STATE.biviFatti.push(b.id);
        TELE.bivio({mese:STATE.mese,giorno:STATE.giornoIdx+1,bivio_id:b.id,bivio_titolo:b.titolo,ramo:r.let,tempo_decisione_sec:Math.round((Date.now()-t0)/1000),bilancio:STATE.ind.bilancio,legami:STATE.ind.legami,studio:STATE.ind.studio,energia:STATE.ind.energia});
        $('#bivioOverlay').classList.remove('active');
        d.classList.add('fatto');renderIndicators();onDone();
      };
      ramRoot.appendChild(btn);
    });
    $('#bivioOverlay').classList.add('active');
  };
}

function appendiRichiesta(root,ric,onDone){
  const d=document.createElement('div');d.className='foglietto foglietto-richiesta';
  d.innerHTML=`<span class="foglietto-tag" style="background:var(--ocra);color:var(--inchiostro)"><i class="iconoir-wallet"></i> Una cosa che vorresti</span><div class="foglietto-titolo">${ric.label}</div><div class="foglietto-corpo">${ric.desc} <span class="costo">${ric.costo} €</span></div><div class="foglietto-rami"><button class="foglietto-ramo" data-stile="subito">Lo chiedo subito ai miei.</button><button class="foglietto-ramo" data-stile="aspetto">Aspetto il momento giusto.</button><button class="foglietto-ramo" data-stile="arrangio">Mi arrangio. Non chiedo.</button></div>`;
  root.appendChild(d);
  d.querySelectorAll('[data-stile]').forEach(btn=>{
    btn.onclick=()=>{
      const stile=btn.dataset.stile;const bil=STATE.ind.bilancio;
      let esito,reazione,eff={};const sost=bil-ric.costo>=300;
      if(stile==='subito'){
        if(sost){esito='si';reazione='I tuoi accettano. "Va bene."';eff.bilancio=-ric.costo;eff.slancio=1}
        else{esito='no';reazione='Papà: "Sai che non è il momento."';eff.slancio=-1;eff.relazioni=-2}
      } else if(stile==='aspetto'){
        if(sost&&Math.random()<0.85){esito='si';reazione='Mamma: "Va bene, ma niente altro questo mese."';eff.bilancio=-ric.costo;eff.disciplina=1}
        else if(Math.random()<0.5){esito='compromesso';reazione='Compromesso: una parte la metti tu con la paghetta.';eff.bilancio=-Math.round(ric.costo/2);eff.disciplina=2;eff.cura=1}
        else{esito='no';reazione='Mamma: "Adesso non possiamo."';eff.disciplina=1}
      } else {esito='no';reazione='Non chiedi. Ti arrangi.';eff.autonomia=2;eff.cura=1}
      applicaEffetti(eff);STATE.richiesteFatte.push(ric.id);
      TELE.richiesta({mese:STATE.mese,giorno:STATE.giornoIdx+1,richiesta_id:ric.id,richiesta_label:ric.label,stile,esito,bilancio_pre:bil,bilancio_post:STATE.ind.bilancio});
      const fb=document.createElement('div');fb.className='feedback';fb.textContent=reazione;
      d.appendChild(fb);d.classList.add('fatto');renderIndicators();onDone();
    };
  });
}

function appendiTruffa(root,t,onDone){
  const d=document.createElement('div');d.className='foglietto foglietto-truffa';
  d.innerHTML=`<span class="foglietto-tag" style="background:var(--rosso)"><i class="iconoir-warning-triangle"></i> Attenzione</span><div class="foglietto-titolo">${t.titolo}</div><div class="foglietto-corpo"><p>${t.scena}</p></div><div class="foglietto-rami">${t.rami.map((r,i)=>`<button class="foglietto-ramo" data-i="${i}"><span class="foglietto-ramo-let">${r.let}</span>${r.testo}</button>`).join('')}</div>`;
  root.appendChild(d);
  d.querySelectorAll('[data-i]').forEach((btn,i)=>{
    btn.onclick=()=>{
      const r=t.rami[i];applicaEffetti({bilancio:r.delta});STATE.truffeFatte.push(t.id);
      TELE.truffa({mese:STATE.mese,giorno:STATE.giornoIdx+1,truffa_id:t.id,truffa_label:t.titolo,tipo:t.tipo,esito:r.esito,perdita_economica:Math.abs(r.delta)});
      const msg=r.esito==='caduto'?`Hai perso ${Math.abs(r.delta)} euro.`:(r.esito==='avvisato'||r.esito==='riconosciuta')?'Truffa evitata. Bene.':'Nessuno ha avvisato.';
      const fb=document.createElement('div');fb.className='feedback';fb.textContent=msg;
      d.appendChild(fb);d.classList.add('fatto');renderIndicators();onDone();
    };
  });
}

function appendiImprevisto(root,imp,onDone){
  const d=document.createElement('div');d.className='foglietto foglietto-imprevisto';
  d.innerHTML=`<span class="foglietto-tag" style="background:var(--verde)"><i class="iconoir-dice-five"></i> Capita</span><div class="foglietto-titolo">${imp.label}</div><div class="foglietto-corpo"><p>${imp.desc}</p>${imp.delta?`<p class="deltetto ${imp.delta>0?'delta-pos':'delta-neg'}">${imp.delta>0?'+':''}${imp.delta} €</p>`:''}</div><div class="foglietto-rami"><button class="foglietto-ramo" data-ack>Ho capito →</button></div>`;
  root.appendChild(d);
  d.querySelector('[data-ack]').onclick=()=>{
    applicaEffetti({bilancio:imp.delta||0});
    if(imp.legami)applicaEffetti({legami:imp.legami});
    if(imp.energia)applicaEffetti({energia:imp.energia});
    STATE.imprevistiFatti.push(imp.id);
    TELE.imprevisto({mese:STATE.mese,giorno:STATE.giornoIdx+1,imprevisto_id:imp.id,label:imp.label,segno:imp.segno,delta:imp.delta||0});
    d.classList.add('fatto');renderIndicators();onDone();
  };
}

function appendiPagellaSettimanale(root,onDone){
  const sIdx=settimanaIdx();const sN=sIdx+1;
  const votiSett=STATE.votiSettimana[sIdx]||{};
  let html=`<div class="pagella"><div class="pagella-titolo">Pagella della settimana ${sN}</div><div class="pagella-sottotit">Domenica sera. Mamma e papà guardano i voti di questi giorni.</div><div>`;
  let totVoti=0,somma=0,nMat=0;
  MATERIE_IDS.forEach(matId=>{
    const v=votiSett[matId];if(!v||v.length===0)return;
    nMat++;const media=v.reduce((a,b)=>a+b,0)/v.length;
    somma+=media;totVoti+=v.length;
    html+=`<div class="pagella-riga"><span class="pagella-mat"><i class="${MATERIE[matId].icon}" style="color:var(--terra)"></i> ${MATERIE[matId].nome}</span><span class="pagella-voti">${v.map(x=>`<span class="pagella-voto ${x<=4?'basso':(x<=6?'medio':'alto')}">${x}</span>`).join('')}<span class="pagella-media">media ${media.toFixed(1)}</span></span></div>`;
  });
  html+='</div>';
  if(nMat>0){
    const mediaGen=somma/nMat;let nota='';
    if(mediaGen>=8)nota='Mamma sorride piano. "Sei in una bella corsa. Tieni così."';
    else if(mediaGen>=6.5)nota='Papà: "Va bene. Bene così."';
    else if(mediaGen>=5)nota='Mamma e papà si guardano. "Ci sta. Ma serve più studio sulle materie deboli."';
    else nota='Silenzio a tavola. Poi mamma: "Domani parliamo di come ti aiutiamo."';
    html+=`<div class="pagella-nota">${nota} <em>Media generale: ${mediaGen.toFixed(2)}</em></div>`;
    if(mediaGen>=8)applicaEffetti({legami:3,slancio:2});
    else if(mediaGen<5)applicaEffetti({legami:-2,relazioni:-3});
  } else {
    html+=`<div class="pagella-nota">Questa settimana niente voti a casa. Si commenta come va in generale.</div>`;
  }
  html+='</div>';
  const d=document.createElement('div');d.innerHTML=html;root.appendChild(d.firstChild);
  const ack=document.createElement('button');ack.className='foglietto-ramo';ack.style.maxWidth='200px';ack.style.marginTop='10px';
  ack.innerHTML='Buona notte →';
  ack.onclick=()=>{ack.disabled=true;renderIndicators();onDone()};
  root.appendChild(ack);
}

function appendiBustaPaga(root,onDone){
  const f=FAMIGLIE[STATE.famigliaId];
  const lordo=f.stipendio_lordo;
  const irpef=Math.round(lordo*0.18);
  const contrib=Math.round(lordo*0.10);
  const netto=lordo-irpef-contrib;
  const d=document.createElement('div');d.className='busta-paga';
  d.innerHTML=`<h4>Fine mese: arriva la busta paga</h4><div class="busta-paga-riga"><span><span class="gloss" data-g="lordo">Lordo</span></span><span class="busta-paga-num">${lordo.toLocaleString('it-IT')} €</span></div><div class="busta-paga-riga"><span>IRPEF (imposta)</span><span class="busta-paga-num">- ${irpef.toLocaleString('it-IT')} €</span></div><div class="busta-paga-riga"><span><span class="gloss" data-g="contributi">Contributi</span></span><span class="busta-paga-num">- ${contrib.toLocaleString('it-IT')} €</span></div><div class="busta-paga-riga tot"><span><span class="gloss" data-g="netto">Netto</span> in tasca</span><span class="busta-paga-num">${netto.toLocaleString('it-IT')} €</span></div>`;
  root.appendChild(d);
  STATE.ind.bilancio+=netto;
  const fisse=(f.mutuo_rata||0)+(f.affitto_rata||0)+350;
  STATE.ind.bilancio=Math.max(0,STATE.ind.bilancio-fisse);
  const fb=document.createElement('div');fb.className='feedback';
  fb.innerHTML=`Spese fisse del mese (<span class="gloss" data-g="mutuo">mutuo</span>/affitto + utenze + spesa): <strong>- ${fisse.toLocaleString('it-IT')} €</strong>. Saldo: <strong>${STATE.ind.bilancio} €</strong>.`;
  root.appendChild(fb);
  const ack=document.createElement('button');ack.className='foglietto-ramo';ack.style.maxWidth='200px';ack.style.marginTop='10px';
  ack.innerHTML='Continua →';
  ack.onclick=()=>{ack.disabled=true;renderIndicators();onDone()};
  root.appendChild(ack);
}

/* AVANZA */
function avantiFase(){
  if(!STATE.faseCompletata)return;
  if(STATE.faseIdx===1)STATE.ind.energia=clamp(STATE.ind.energia-3,0,100);
  STATE.faseIdx++;
  if(STATE.faseIdx>=3){
    TELE.giorno({mese:STATE.mese,giorno:STATE.giornoIdx+1,bilancio:STATE.ind.bilancio,studio:STATE.ind.studio,forma:STATE.ind.forma,energia:STATE.ind.energia,relazioni:STATE.ind.relazioni,legami:STATE.ind.legami});
    STATE.giornoIdx++;STATE.faseIdx=0;
    if(STATE.giornoIdx>=28){finale();return}
  }
  apriGiorno();
}

/* FINALE */
function finale(){
  const dom=trattoDominante(),sec=trattoSecondo();
  const f=FAMIGLIE[STATE.famigliaId];
  const mediePerMat={};
  MATERIE_IDS.forEach(matId=>{const v=STATE.voti[matId];if(v.length>0)mediePerMat[matId]=v.reduce((a,b)=>a+b,0)/v.length});
  let bestMat='',bestV=-1,worstMat='',worstV=11;
  for(const m in mediePerMat){if(mediePerMat[m]>bestV){bestV=mediePerMat[m];bestMat=m}if(mediePerMat[m]<worstV){worstV=mediePerMat[m];worstMat=m}}
  TELE.end({mese:STATE.mese,giorni_completati:28,completata:true,bilancio:STATE.ind.bilancio,legami:STATE.ind.legami,studio:STATE.ind.studio,forma:STATE.ind.forma,energia:STATE.ind.energia,relazioni:STATE.ind.relazioni,tratto_dominante:TRATTI_LABEL[dom]||'',tratto_secondo:TRATTI_LABEL[sec]||'',disciplina:STATE.tratti.disciplina,slancio:STATE.tratti.slancio,coraggio_civile:STATE.tratti.coraggio_civile,cura:STATE.tratti.cura,autonomia:STATE.tratti.autonomia,voti_totali:Object.values(STATE.voti).flat().length,materia_migliore:bestMat,media_migliore:bestV.toFixed(2),materia_peggiore:worstMat,media_peggiore:worstV.toFixed(2),n_carte_ricordo:STATE.carteRicordo.length});
  const root=$('#finaleContent');root.innerHTML='';
  // P1 - conti
  const p1=document.createElement('div');p1.className='finale-card';
  p1.innerHTML=`<div class="finale-card-titolo">Quattro settimane nella famiglia ${f.nome}, a ${MESI[STATE.mese]}</div><p>Sei partito da ${f.bilancio} €. A fine mese il conto è a ${STATE.ind.bilancio} €.</p><p>${STATE.ind.bilancio>=f.bilancio?'I conti hanno tenuto. Mese gestibile.':STATE.ind.bilancio>=f.bilancio*0.5?'I conti si sono assottigliati ma reggono.':'I conti sono finiti corti. Mese duro.'}</p><p>I <strong>legami</strong> in casa: ${STATE.ind.legami}/100. ${STATE.ind.legami>=70?'Più stretti di quattro settimane fa.':STATE.ind.legami>=50?'Più o meno come all\'inizio.':'Un po\' allentati. Capita.'}</p>`;
  root.appendChild(p1);
  // P2 - scuola
  const p2=document.createElement('div');p2.className='finale-card';
  let chiSc='';
  if(bestMat&&worstMat&&bestMat!==worstMat){
    const bN=MATERIE[bestMat].nome,wN=MATERIE[worstMat].nome;
    const bM=STATE.profiloMaterie[bestMat],wM=STATE.profiloMaterie[worstMat];
    chiSc=`<p>Hai brillato in <strong>${bN}</strong> (media ${bestV.toFixed(1)}). ${bM==='luminosa'?'Era una materia luminosa: hai onorato il talento.':bM==='ombra'?'Era una materia in ombra: l\'hai vinta a forza di volontà.':'Né luminosa né scura. L\'hai conquistata.'}</p><p>Hai faticato in <strong>${wN}</strong> (media ${worstV.toFixed(1)}). ${wM==='ombra'?'Era materia in ombra: comprensibile.':wM==='luminosa'?'Era materia luminosa: avevi tutto per andare bene. Qualcosa è andato storto.':'Non ti era ostile, ma il mese non te l\'ha lasciata addomesticare.'}</p>`;
  }
  p2.innerHTML=`<div class="finale-card-titolo">A scuola questo mese</div>${chiSc||'<p>Pochi voti per fare un quadro. Mese di transizione.</p>'}`;
  root.appendChild(p2);
  // P3 - chi sei
  const p3=document.createElement('div');p3.className='finale-card';
  let chiSei='';
  if(dom==='disciplina')chiSei='Hai imparato a dire di no quando serve. A studiare quando si studia. A non rimandare. Sei uno che a giugno arriva preparato.';
  else if(dom==='slancio')chiSei='Hai vissuto pieno. Hai detto sì alle cose. Sei uno che ricorda quest\'anno per le cose fatte, non per quelle perse.';
  else if(dom==='coraggio_civile')chiSei='Hai parlato quando gli altri stavano zitti. Hai detto cose scomode al momento giusto. Di te ci si fida.';
  else if(dom==='cura')chiSei='Hai notato le persone intorno a te. Hai messo gli altri prima di te. Fai la differenza anche senza far rumore.';
  else if(dom==='autonomia')chiSei='Ti sei arrangiato. A volte risolversi da soli è una forma di rispetto verso chi sta facendo già abbastanza. Cresci in fretta.';
  p3.innerHTML=`<div class="finale-card-titolo">Chi sei diventato</div><p><span class="tratto-emerso">${TRATTI_LABEL[dom]||''}</span> <span class="tratto-emerso" style="background:var(--ocra);color:var(--inchiostro)">${TRATTI_LABEL[sec]||''}</span></p><p>${chiSei}</p><p>Il tratto secondo è la <strong>${(TRATTI_LABEL[sec]||'').toLowerCase()}</strong>. Si sente solo quando ce n'è bisogno.</p>`;
  root.appendChild(p3);
  vai('screen-finale');
}

/* GLOSSARIO */
function setupGlossario(){
  document.addEventListener('click',e=>{
    const t=e.target.closest('.gloss');
    if(t){e.stopPropagation();mostraGloss(t)}
    else $('#glossPopup').style.display='none';
  });
}
function mostraGloss(el){
  const key=el.dataset.g;const g=GLOSSARIO[key];if(!g)return;
  $('#glossTitle').textContent=key.toUpperCase();
  $('#glossDef').textContent=g.d;
  $('#glossEx').textContent='« '+g.e+' »';
  const popup=$('#glossPopup');popup.style.display='block';
  const r=el.getBoundingClientRect();let t=r.bottom+6,l=r.left;
  if(t+200>window.innerHeight)t=r.top-200;if(l+300>window.innerWidth)l=window.innerWidth-310;
  popup.style.top=t+'px';popup.style.left=l+'px';
}

/* SALA */
const SALA={
  clicks:[],violazioni:0,
  init(){document.addEventListener('click',()=>this.registra())},
  registra(){
    const now=Date.now();this.clicks.push(now);
    this.clicks=this.clicks.filter(t=>now-t<5000);
    if(this.clicks.length>10){this.violazioni++;this.clicks=[];if(this.violazioni>=3){$('#salaMsg').textContent='Troppi click ravvicinati.';$('#salaOverlay').classList.add('active')}}
  }
};
function salaSblocca(){
  if($('#salaPin').value.trim()===SALA_PIN){$('#salaOverlay').classList.remove('active');$('#salaPin').value='';SALA.violazioni=0;SALA.clicks=[]}
  else{$('#salaPin').value='';$('#salaPin').placeholder='PIN errato'}
}

window.addEventListener('DOMContentLoaded',()=>{
  buildClassi();popolaSlotFamiglia();popolaSlotMaterie();setupGlossario();SALA.init();
});
