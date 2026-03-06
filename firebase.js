// =============================================
//  FINANCEFLOW — Firebase Connection
//  Arquivo compartilhado por todas as páginas
// =============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

// ── Suas credenciais do Firebase ──
const firebaseConfig = {
  apiKey: "AIzaSyC5DFzLGHUJAJSYeiXQ9HUFt11SDVo9zic",
  authDomain: "financeflow-403f8.firebaseapp.com",
  projectId: "financeflow-403f8",
  storageBucket: "financeflow-403f8.firebasestorage.app",
  messagingSenderId: "899354096802",
  appId: "1:899354096802:web:82c50ddd06759df2d753fb"
};

// ── Inicializa o app ──
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ── Exporta tudo que as páginas precisam ──
export {
  db,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp
};

// =============================================
//  COLEÇÕES DO BANCO DE DADOS
//  Referência rápida:
//
//  transacoes      → lançamentos mensais pessoais
//  cartoes         → cartões de crédito cadastrados
//  cartao_itens    → compras na fatura
//  contas_casa     → gastos compartilhados
//  metas           → metas financeiras e de compras
//  investimentos   → movimentações do cofrinho
//  planejamentos   → simulações de meses futuros
//  pj_registros    → notas fiscais / freelances
//  configuracoes   → preferências do usuário
// =============================================
