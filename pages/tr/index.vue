<template>
  <v-container style="margin-top: 3%">
    <v-row>
      <v-col cols="12" md="4">
        <v-card
          style="
            border-radius: 100%;
            margin: 0;
            padding: 0;
            margin-left: auto;
            margin-right: auto;
            width: 70%;
          "
        >
          <v-img
            width="100%"
            aspect-ratio="1/1"
            contain
            :src="profile"
            aria-label="Profil Resmi"
          />
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <h1>Kürşat Edabalı Yıldırım</h1>
        <v-card
          width="100%"
          color="secondary"
          subtitle="Bilgisayar Mühendisliği Öğrencisi"
          text="Merhaba, Adnan Menderes Üniversitesi'nde bilgisayar bilimleri ve mühendisliği öğrencisiyim. Çocukluğumdan beri bilgisayarlarla uğraşmayı ve onlarla ilgili problemleri çözmeyi sevdim. Kuzenime web sitelerini oluşturmada yaratıcı yazım ve sitelerindeki mantıksal hataları bulma gibi bazı konularda yardımcı oldum. Her zaman hayalini kurduğum alanda çalışmaktan heyecan duyuyorum."
          density="comfortable"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card
          width="100%"
          color="primary"
          title="Eğitim"
          text="Mevcut eğitimim biraz açıklamaya ihtiyaç duyuyor. Gerçek üniversitem İstanbul Aydın Üniversitesi, ancak engellilik ve ekonomik kısıtlamalar nedeniyle eğitimimi Adnan Menderes Üniversitesi'nde alıyorum."
        ></v-card>
        <v-card title="Engellilikler" color="secondary">
          <strong>Sağ Göz:</strong> Sağ gözüm protez<br />
          <strong>Sol Göz:</strong> Sol gözüm 5.5 hipermetropik ve 0.75 astigmatik
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          width="100%"
          title="Eğitim"
          color="primary"
          subtitle="Adnan Menderes Üniversitesi"
          text="Şu anda Adnan Menderes Üniversitesi'nde okuyorum. Aslen İstanbul Aydın Üniversitesi'ndenim, ancak engellilik nedeniyle çalışmalarımı Adnan Menderes Üniversitesi'nde yürütüyorum."
          density="comfortable"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          width="100%"
          title="Deneyim"
          color="primary"
          subtitle="Ortak Yazarlık"
          text="2023 yılında DergiPark için 'Değerlendirme Metriklerinde Fonetik Hataların Rolü' başlıklı bir makalede ortak yazarlık yaptım. Bu deneyim, fonetik hataların ve bunların değerlendirme metriklerine etkisinin anlaşılmasını artırdı."
          density="comfortable"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card
          width="100%"
          :style="secondat"
          title="Hobiler"
          density="comfortable"
          subtitle="Yapılacak Şeyler"
        >
          <v-list>
            <v-list-item :style="primat" append-icon="mdi-book-open"
              >Okuma</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-code-json"
              >Kodlama</v-list-item
            >
            <v-list-item :style="primat" append-icon="mdi-semantic-web"
              >Yeni Teknolojiler Öğrenme</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-camera"
              >Fotoğrafçılık</v-list-item
            >
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          width="100%"
          title="Yetenekler"
          subtitle="Programlama Dilleri ve Araçlar"
          color="primary"
          dense
        >
          <v-list>
            <v-list-item :style="primat" append-icon="mdi-language-c"
              >C</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-language-cpp"
              >C++</v-list-item
            >
            <v-list-item :style="primat" append-icon="mdi-language-java"
              >Java</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-language-python"
              >Python</v-list-item
            >
            <v-list-item :style="primat" append-icon="mdi-language-javascript"
              >JavaScript</v-list-item
            >
            <v-list-item :style="secondat" append-icon="mdi-language-html5"
              >HTML</v-list-item
            >
            <v-list-item :style="primat" append-icon="mdi-language-css3"
              >CSS</v-list-item
            >
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          width="100%"
          title="Deneyimler"
          color="primary"
          subtitle="İş Deneyimi"
          density="comfortable"
        >
          <v-row>
            <v-col cols="12">
              <v-card-title>Stajyer</v-card-title>
              <v-card-text>
                <p><strong>İş Başlığı / Pozisyon:</strong> Stajyer</p>
                <p><strong>Ülke:</strong> Türkiye</p>
                <p><strong>Şehir:</strong> Aydın</p>
                <p><strong>İlçe:</strong> Efeler</p>
                <p>
                  <strong>Şirket / İşveren:</strong> Aydın Adnan Menderes
                  Üniversitesi
                </p>
                <p><strong>Başlangıç Tarihi:</strong> 03/07/2023</p>
                <p><strong>Bitiş Tarihi:</strong> 28/07/2023</p>
                <p><strong>Deneyim:</strong> 0.07</p>
                <p><strong>Ayrılma Nedeni:</strong> Staj sona erdi</p>
                <p><strong>Aldığı Maaş:</strong> 0</p>
                <p>
                  <strong>Görevler ve Sorumluluklar:</strong> Makine Çeviri
                  Metrikleri üzerine araştırma
                </p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <v-card
          width="100%"
          title="Son Söz"
          color="secondary"
          text="Bir öğrenci olarak, yeni iş deneyimleri kazanmayı ve daha büyük, daha önemli bir parçası olmayı dört gözle bekliyorum. Amacım, öğrenmek, büyümek, bir ekip için yararlı olmak ve söz konusu ekiple önemli bir şeyler yapmaktır. Dikkatli bir dinleyici olarak direktifleri takip edebilir ve işle ilgili sorunları anlamak ve çözmek için gerekli araçları kullanabilirim, çalışma deneyimi kazanmak önemlidir ve biri çalışma ortamında, günlük yaşamda veya herhangi bir şeyde, deneyim, belki de en önemli şeylerden biridir."
          density="comfortable"
        />
      </v-col>
    </v-row>

    <!-- Eğitim Bilgileri -->
    <!-- Yeni Bölümlerin Sonu -->
  </v-container>
</template>

<script lang="ts">
import profile from "@/assets/profile.jpg";
import { useTheme } from "vuetify";
import { ref, watch } from "vue";

export default {
  setup() {
    const theme = useTheme();
    const pLight = "background-color: #6200EE; color:white";
    const sLight = "background-color: #03DAC6; weight: 800";
    const pDark = "background-color: #007bff";
    const sDark = "background-color: #7315d6";

    watch(
      () => theme.global.current.value.dark,
      (newVal) => {
        primat.value = newVal ? pDark : pLight;
        secondat.value = newVal ? sDark : sLight;
      }
    );

    const primat = ref(theme.global.current.value.dark ? pDark : pLight);
    const secondat = ref(theme.global.current.value.dark ? sDark : sLight);

    return {
      primat,
      secondat,
      profile,
    };
  },
};
</script>