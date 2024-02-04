import { createReducer, on } from '@ngrx/store';
import {
  controlEntities,
  controlDocuments,
  controlDocument,
  controlQueue,
  controlProcessAndTokens,
  controlBlockPage,
  resetStoreDoctypeGroups,
  controlAnnexes,
  controlDoctype,
  controlStepEntities,
  deleteStepEntities,
  controlProcess,
  controlProcessQueueTokensDocuments,
  controlTokens,
} from '@app/core/store/actions/doctype-group.action';
import {Document, Queue, Process, Token, EntityValue, Entities, DocType} from '@app/core/models';

export interface DoctypeGroup {
  entities: Entities[];
  stepEntities: EntityValue[];
  documents: Document[];
  selectedDocuments: Document[];
  selectedQueue: Queue;
  selectedProcess: Process;
  tokens: Token[];
  isChangedTokens: boolean;
  isChangedSelectedDocument: boolean;
  isBlockPage: boolean;
  annexes: Document[];
  selectedDoctype: DocType;
  allProcess: Process[];
  documentsByQueue: {};
}

export const DoctypeGroupInitialState: DoctypeGroup = {
  entities: [],
  stepEntities: [],
  documents: [],
  selectedDocuments: [],
  selectedQueue: {} as Queue,
  selectedProcess: {} as Process,
  tokens: [],
  isChangedTokens: false,
  isChangedSelectedDocument: false,
  isBlockPage: false,
  annexes: [],
  selectedDoctype: {} as DocType,
  allProcess: [],
  documentsByQueue: { Todos: [] },
};

// @ts-ignore
// @ts-ignore
const doctypeGroupreducer = createReducer(
  DoctypeGroupInitialState,
  on(controlEntities, (state, { entities }) => ({
    ...state,
    entities,
    // selectedDocuments: [],
    isChangedTokens: false,
    isChangedSelectedDocument: false,
  })),
  on(controlDocuments, (state, { documents }) => ({
    ...state,
    documents,
    selectedDocuments: [],
    isChangedTokens: false,
    isChangedSelectedDocument: false,
  })),
  on(controlDocument, (state, { selectedDocuments }) => ({
    ...state,
    selectedDocuments,
    isChangedTokens: false,
    isChangedSelectedDocument: true,
  })),
  on(controlQueue, (state, { selectedQueue, documents }) => ({
    ...state,
    selectedQueue,
    documents,
    selectedDocuments: [],
    isChangedTokens: false,
    isChangedSelectedDocument: false,
  })),
  on(controlProcessAndTokens, (state, { selectedProcess, tokens }) => ({
    ...state,
    selectedProcess,
    tokens,
    isChangedTokens: true,
    isChangedSelectedDocument: false,
    ...getDocumentsByQueue(tokens, state.selectedQueue, true),
  })),
  on(controlTokens, (state, { tokens, isRechargeManual }) => ({
    ...state,
    tokens,
    isChangedTokens: true,
    isChangedSelectedDocument: false,
    ...getDocumentsByQueue(tokens, state.selectedQueue, isRechargeManual),
  })),
  on(controlProcessQueueTokensDocuments, (state, { selectedProcess, selectedQueue, tokens, documents }) => ({
    ...state,
    selectedProcess,
    selectedQueue,
    tokens,
    isChangedTokens: true,
    isChangedSelectedDocument: false,
    ...getDocumentsByQueue(tokens, selectedQueue, true),
  })),
  on(controlBlockPage, (state, { isBlockPage }) => ({
    ...state,
    isBlockPage,
    isChangedSelectedDocument: false,
  })),
  on(controlAnnexes, (state, { annexes }) => ({
    ...state,
    annexes,
    isChangedTokens: false,
    isChangedSelectedDocument: false,
  })),
  on(resetStoreDoctypeGroups, (state) => ({
    ...state,
    ...DoctypeGroupInitialState,
  })),
  on(controlDoctype, (state, { selectedDoctype }) => ({
    ...state,
    selectedDoctype,
  })),
  on(controlStepEntities, (state, { stepEntities }) => ({
    ...state,
    stepEntities,
  })),
  on(controlProcess, (state, { allProcess }) => ({
    ...state,
    allProcess,
  })),
  on(deleteStepEntities, (state) => ({
    ...state,
    stepEntities: [],
  })),
);

function getDocumentsByQueue(
  tokens: Token[],
  queue: Queue,
  isRechargeManual: boolean,
): { documentsByQueue: {}; documents: Document[]; selectedDocuments: Document[] } {
  const documentsByQueue: any = { Todos: [] };
  if (tokens) {
    tokens.map((token: Token) => {
      const document: Document = {};
      document.id = token.document?.id;
      document.doctype = token.doctype;
      document.auto_name = token.autoname;
      document.created_at = token.created_at;
      if (!documentsByQueue[token.queue?.name || 0]) documentsByQueue[token.queue?.name || 0] = [];
      documentsByQueue[token.queue?.name || 0].push(document);
      documentsByQueue['Todos'].push(document);
    });
  }

  const documents: any = queue && documentsByQueue[queue.name || 0] ? documentsByQueue[queue.name || 0] : [];
  if (isRechargeManual) {
    return { documentsByQueue, documents, selectedDocuments: [] };
  } else {
    const selectedDocuments =
      queue && documentsByQueue[queue.name || 0] && documentsByQueue[queue.name || 0].length
        ? documentsByQueue[queue.name || 0].slice(0, 1)
        : [];
    return { documentsByQueue, documents, selectedDocuments };
  }
}

export function DoctypeGroupReducer(state: any, action: any) {
  return doctypeGroupreducer(state, action);
}
