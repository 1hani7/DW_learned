<template>
    <main id="main">
        <section id="content">
            <div>
                <video src="@/assets/makeUp.mp4" type="video/mp4" autoplay loop></video>
            </div>
            <div>
                <video src="@/assets/makeUp2.mp4" type="video/mp4" autoplay loop></video>
            </div>
            <div>
                <video src="@/assets/makeUp3.mp4" type="video/mp4" autoplay loop></video>
            </div>
            <div class="Card">
                <div>
                    <h3>전문가의 손길로 완성되는</h3>
                    <h3>아름다운 당신</h3>
                </div>
                <div>
                    <h2>042 - <br>1234 - 5678</h2>
                    <p>주말 / 공휴일 휴업</p>
                    <p>SNS</p>
                </div>
            </div>
        </section>
        <section id="side">
          <a class="login_bt" href="/login">LOGIN</a>
        </section>
    </main>
</template>

<script>
export default {
    name:'MakeUp'
}
</script>

<style>
@import '@/assets/MakeUp.css';
</style>