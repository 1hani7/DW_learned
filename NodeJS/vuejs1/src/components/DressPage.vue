<template>
    <main id="main">
        <section id="content">
            <div>
                <h2>
                    스드메 드레스 LIST
                </h2>
            </div>
            <div id="dressDisplay">
                <div class="dressCard" v-for="d in Ddata" :key="d.id">
                    <!-- <div :style={"'backgroundImage: url(' + require('@/파일경로') + ');'"></div> -->
                    <div :style="'background-image: url(' + d.imgUrl + ');'"></div>
                    <h2>{{d.name}}</h2>
                    <p>{{d.hashTag}}</p>
                    <h5>{{d.line}}</h5>
                    <h5>{{ d.desc }}</h5>
                    <i class="bi bi-bag-plus"></i>
                </div>
            </div>
        </section>
        <section id="side">
          <a class="login_bt" href="/login">LOGIN</a>
        </section>
    </main>
</template>

<script>
import data from '@/assets/DressPageData.json';
const Ddata = data;
console.log(Ddata)
export default {
    data(){
        return { Ddata, }
    },
    name:"DressPage"
}
</script>

<style>
@import '@/assets/DressPage.css';
</style>