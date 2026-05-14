/* ════════════════════════════════════════════════════════════
   FAMILYDASH — Telemetria V3
   V3 = 1 mese × 4 settimane × 7 giorni × 3 fasi
   Eventi: start, slot, giorno, materia, compito, voto,
           bivio, richiesta, truffa, imprevisto, mese, end
   Invio via Image-pixel GET (CSP-safe)
   ════════════════════════════════════════════════════════════ */

(function(){
  'use strict';

  const ENDPOINT = 'https://script.google.com/macros/s/AKfycbwRWrMZ80zUtbko-8acWM_zikgaUieBIKvT3Tc3vWY7Z0dWZolaK8KOXJY0Nv7uy_QDcg/exec';

  const sess = {
    session_id: null, classe: null, famiglia: null,
    ts_inizio: null, eventi_inviati: 0, debug: false
  };

  function generaSid() {
    return 'fd_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 10);
  }

  function invia(params) {
    if (!sess.session_id) return;
    const all = Object.assign({
      sid: sess.session_id,
      classe: sess.classe,
      famiglia: sess.famiglia,
      ts: Date.now()
    }, params);
    const qs = Object.keys(all)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(String(all[k] !== undefined ? all[k] : '')))
      .join('&');
    const img = new Image();
    img.onerror = function(){ if(sess.debug) console.warn('[TELE] FAIL:', params.event); };
    img.onload  = function(){ if(sess.debug) console.log('[TELE] OK:', params.event); };
    img.src = ENDPOINT + '?' + qs;
    sess.eventi_inviati++;
    if (sess.debug) console.log('[TELE] →', params.event, params);
  }

  window.TELE = {
    start: function(classe, famiglia) {
      sess.session_id = generaSid();
      sess.classe = classe || '';
      sess.famiglia = famiglia || '';
      sess.ts_inizio = Date.now();
      invia({ event: 'start' });
      return sess.session_id;
    },

    slot: function(d) {
      invia({ event: 'slot', tipo: d.tipo || '', valore: d.valore || '' });
    },

    /* ═══ V3 — snapshot fine giorno ═══ */
    giorno: function(d) {
      invia({
        event: 'giorno', mese: d.mese||0, giorno: d.giorno||0,
        bilancio: d.bilancio||0, studio: d.studio||0, forma: d.forma||0,
        energia: d.energia||0, relazioni: d.relazioni||0, legami: d.legami||0
      });
    },

    /* ═══ V3 — esito di un microevento orario ═══ */
    materia: function(d) {
      invia({
        event: 'materia', mese: d.mese||0, giorno: d.giorno||0,
        materia: d.materia||'', mood: d.mood||'',
        microevento: d.microevento||'', ramo: d.ramo||'',
        voto: d.voto!==null && d.voto!==undefined ? d.voto : ''
      });
    },

    /* ═══ V3 — singolo compito fatto/saltato ═══ */
    compito: function(d) {
      invia({
        event: 'compito', mese: d.mese||0, giorno: d.giorno||0,
        materia: d.materia||'', esito: d.esito||'', desc: (d.desc||'').slice(0,120)
      });
    },

    /* ═══ V3 — singolo voto ═══ */
    voto: function(d) {
      invia({
        event: 'voto', mese: d.mese||0, giorno: d.giorno||0,
        materia: d.materia||'', voto: d.voto||0, mood: d.mood||''
      });
    },

    bivio: function(d) {
      invia({
        event: 'bivio', mese: d.mese||0, giorno: d.giorno||0,
        bivio_id: d.bivio_id||'', bivio_titolo: d.bivio_titolo||'',
        ramo: d.ramo||'', tempo_decisione_sec: d.tempo_decisione_sec||0,
        bilancio: d.bilancio||0, legami: d.legami||0,
        studio: d.studio||0, energia: d.energia||0
      });
    },

    richiesta: function(d) {
      invia({
        event: 'richiesta', mese: d.mese||0, giorno: d.giorno||0,
        richiesta_id: d.richiesta_id||'', richiesta_label: d.richiesta_label||'',
        stile: d.stile||'', esito: d.esito||'',
        bilancio_pre: d.bilancio_pre||0, bilancio_post: d.bilancio_post||0
      });
    },

    truffa: function(d) {
      invia({
        event: 'truffa', mese: d.mese||0, giorno: d.giorno||0,
        truffa_id: d.truffa_id||'', truffa_label: d.truffa_label||'',
        tipo: d.tipo||'', esito: d.esito||'',
        perdita_economica: d.perdita_economica||0
      });
    },

    imprevisto: function(d) {
      invia({
        event: 'imprevisto', mese: d.mese||0, giorno: d.giorno||0,
        imprevisto_id: d.imprevisto_id||'', label: d.label||'',
        segno: d.segno||'', delta: d.delta||0
      });
    },

    /* compat V2 — sopravvive per non rompere Code.gs vecchio */
    mese: function(d) {
      invia({
        event: 'mese', mese: d.mese||0,
        bilancio: d.bilancio||0, legami: d.legami||0,
        studio: d.studio||0, forma: d.forma||0,
        energia: d.energia||0, relazioni: d.relazioni||0
      });
    },

    end: function(d) {
      invia({
        event: 'end',
        mese: d.mese||0,
        giorni_completati: d.giorni_completati||0,
        completata: d.completata?1:0, abbandonata: d.abbandonata?1:0,
        bilancio: d.bilancio||0, legami: d.legami||0,
        studio: d.studio||0, forma: d.forma||0,
        energia: d.energia||0, relazioni: d.relazioni||0,
        tratto_dominante: d.tratto_dominante||'',
        tratto_secondo: d.tratto_secondo||'',
        disciplina: d.disciplina||0, slancio: d.slancio||0,
        coraggio_civile: d.coraggio_civile||0,
        cura: d.cura||0, autonomia: d.autonomia||0,
        voti_totali: d.voti_totali||0,
        materia_migliore: d.materia_migliore||'',
        media_migliore: d.media_migliore||0,
        materia_peggiore: d.materia_peggiore||'',
        media_peggiore: d.media_peggiore||0,
        n_carte_ricordo: d.n_carte_ricordo||0,
        durata_secondi: Math.round((Date.now()-sess.ts_inizio)/1000)
      });
    },

    /* compat V2 */
    sacrificio: function(){},
    frutto: function(){},

    getSessionId: function() { return sess.session_id; },
    getStats: function() {
      return {
        session_id: sess.session_id, classe: sess.classe,
        famiglia: sess.famiglia, eventi_inviati: sess.eventi_inviati,
        durata_secondi: sess.ts_inizio ? Math.round((Date.now()-sess.ts_inizio)/1000) : 0
      };
    },
    setDebug: function(b) { sess.debug = !!b; }
  };
})();
