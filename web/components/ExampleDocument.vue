<template>
  <div class="docs">
    <div class="queries">
      <div class="queries__label">Queries:</div>
      <div class="chips">
        <div
          v-for="(query, index) in filteredQueries"
          :key="index"
          class="chip">{{ query }}</div>
        </div>
    </div>
    <div class="text">
      <text-highlight
        :queries="queries"
        :highlightComponent="highlightComponent"
        :highlightStyle="getStyle"
        @enter="setActiveIndex"
        @leave="unsetActiveIndex"
        :activeIndex="activeIndex"
        :displayHoverMe="true"
        :caseSensitive="caseSensitive"
        :diacriticsSensitive="diacriticsSensitive"
        :mergeHighlights="mergeHighlights"
      >
        {{ textEnglish }}
      </text-highlight>
    </div>
    <div class="text">
      <text-highlight
        :queries="queries"
        :highlightComponent="highlightComponent"
        :highlightStyle="getStyle"
        @enter="setActiveIndex"
        @leave="unsetActiveIndex"
        :activeIndex="activeIndex"
        :displayHoverMe="true"
        :caseSensitive="caseSensitive"
        :diacriticsSensitive="diacriticsSensitive"
        :mergeHighlights="mergeHighlights"
      >
        {{ textSpanish }}
      </text-highlight>
    </div>
    <div class="html">
      <text-highlight
        :queries="queries"
        :highlightStyle="getStyle"
        :highlightComponent="highlightComponent"
        @enter="setActiveIndex"
        @leave="unsetActiveIndex"
        :activeIndex="activeIndex"
        :caseSensitive="caseSensitive"
        :diacriticsSensitive="diacriticsSensitive"
        :mergeHighlights="mergeHighlights"
      >
        {{ html }}
      </text-highlight>
    </div>
  </div>
</template>

<script>
import TextHighlight from 'vue-text-highlight';
import CustomHighlightComponent from './CustomHighlightComponent';
import { texts, html } from '../assets/data';

const HIGHLIGHTS = ['#95eadc',
  '#e1b0dd',
  '#9dc58e',
  '#74aff3',
  '#d8ebb4',
  '#bcb8ec',
  '#b2ecc5',
  '#edaab4',
  '#73d3df',
  '#e8b594',
  '#7cc9ef',
  '#d3c896',
  '#a2bfe9',
  '#8dc7ab',
  '#8dc3b8',
];

export default {
  props: {
    search: String,
    split: Boolean,
    custom: Boolean,
    caseSensitive: Boolean,
    diacriticsSensitive: Boolean,
    mergeHighlights: Boolean,
  },
  components: {
    TextHighlight,
  },
  data() {
    return {
      textEnglish: texts.english,
      textSpanish: texts.spanish,
      html,
      activeIndex: null,
    };
  },
  computed: {
    queries() {
      return this.split ? this.search.split(/\s+/) : [this.search];
    },
    filteredQueries() {
      return this.queries.filter(query => query);
    },
    highlightProps() {
      return {
        activeIndex: this.activeIndex,
      };
    },
    highlightComponent() {
      return this.custom
        ? CustomHighlightComponent
        : 'mark';
    },
  },
  methods: {
    getStyle(queryIndex) {
      return this.split ? `background-color: ${HIGHLIGHTS[queryIndex % HIGHLIGHTS.length]}` : '';
    },
    setActiveIndex(index) {
      this.activeIndex = index;
    },
    unsetActiveIndex() {
      this.activeIndex = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.docs {
  text-align: left;
  padding: 5px;
  .queries {
    padding: 10px;
    padding-top: 0;
    &__label {
      font-size: 14px;
      opacity: 0.8;
      margin-bottom: 5px;
    }
    .chips {
      display: flex;
      flex-wrap: wrap;
      .chip {
        padding: 5px 8px;
        background-color: #42b983;
        color: white;
        margin: 0 3px 3px 0;
        border-radius: 5px;
      }
    }
  }
  .text {
    padding: 10px;
    font-size: 14px;
  }
  .html {
    padding: 10px;
    color: #42b983;
    font-weight: 500;
  }
}
</style>

