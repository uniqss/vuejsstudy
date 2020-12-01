<template>
  <div>
    <div>#pragma once</div>
    <div>#include &ltvector&gt</div>
    <div>#include &ltmap&gt</div>
    <div>#include "uniqsconfigtypes.h"</div>
    <p/>
    <div>class {{ sheetName }}</div>
    <div>{</div>
    <div>public:</div>
    <div>{{ sheetName }}()</div>
    {
    <div v-for="idx in dataLen">
      <!--      <div v-if="!isComment(idx)">-->
      {{ dataTypes[idx - 1] }} {{ codeNames[idx - 1] }};
      <!--      </div>-->
    </div>
    <div v-for="idx in dataLen">
      {{ codeNames[idx - 1] }} = {{ defaultValue(dataTypes[idx - 1]) }};
    </div>
    <div>}</div>
    <div>};</div>

    <div>class {{ sheetName }}_Data</div>
    <div>{</div>
    <div>public:</div>
    <div>std::vector&lt {{ sheetName }}&gt Datas;</div>
    <div>std::map&ltuint32, {{ sheetName }}*&gt MapItems1;</div>
    <div>std::map&ltstd::tuple&ltuint32, string&gt, {{ sheetName }}*&gt MapItems2;</div>
    <div>public:</div>
    <div>const {{ sheetName }}* FindByKey1(const uint32& Id) const</div>
    <div>{</div>
    <div>auto it = MapItems1.find(Id);</div>
    <div>if (it != MapItems1.end())</div>
    <div>{</div>
    <div>return it->second;</div>
    <div>}</div>
    <div>return nullptr;</div>
    <div>}</div>

    const {{ sheetName }}* FindByKey2(const uint32& Type, const string& Name) const
    {
    auto it = MapItems2.find(make_tuple(Type, Name));
    if (it != MapItems2.end())
    {
    return it->second;
    }
    return nullptr;
    }
    };
    extern {{ sheetName }}_Data __g_{{ sheetName }}_Data;
    const {{ sheetName }}_Data& Get{{ sheetName }}();
    // 加载函数
    void {{ sheetName }}_LoadData(const std::string& pszDataFilePath);
    void {{ sheetName }}_SetColumn({{ sheetName }}& rCfg, const std::string& name, const std::string& col);
  </div>
</template>

<script>
export default {
  name: "CppHeader",
  props: {
    path: String,
    xlsxName: {
      type: String,
    },
    sheetName: {
      type: String,
    },
    data: {
      type: Array,
    },
  },
  methods: {
    isComment(idx) {
      if (this.data.length >= 6) {
        return this.data[0][idx].indexOf("#") !== -1
      }
      return false
    },
    defaultValue(type) {
      if (type === 'uint32') return 0;
      if (type === 'int32') return 0;
      if (type === 'int64') return 0;
      if (type === 'uint64') return 0;
      if (type === 'string') return '""';
    }
  },
  computed: {
    dataLen() {
      if (this.data.length >= 6)
        return this.data[2].length
    },
    codeNames() {
      if (this.data.length >= 6)
        return this.data[2]
    },
    dataTypes() {
      if (this.data.length >= 6)
        return this.data[3]
    },
  },
  beforeMount() {
    console.log('beforeMount');
  },
}
</script>

<style scoped>

</style>
