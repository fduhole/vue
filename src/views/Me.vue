<template>
  <v-container>
    <message ref="message"></message>

    <h1>{{ profile.user.username }}</h1>

    <h2>我的收藏</h2>
    <p v-if="profile.favored_discussion.length == 0">
      该功能正在开发中，敬请期待~
    </p>
    <DiscussionCard
      v-for="discussion in profile.favored_discussion"
      :key="discussion.id"
      :discussion="discussion"
    ></DiscussionCard>

    <v-row justify="space-around" style="margin: 20px 0; width =100%">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" width="40%" v-bind="attrs" v-on="on">
            修改密码
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">修改密码</span>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="newPassWd"
                :rules="passwordRules"
                label="新密码"
                required
              ></v-text-field>

              <v-row
                align="center"
                justify="center"
                style="margin-bottom: -12px"
              >
                <v-col cols="6" sm="8">
                  <v-text-field
                    v-model="code"
                    label="邮件验证码"
                    :counter="6"
                    :rules="codeRules"
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-btn
                    color="primary"
                    block
                    :disabled="!sendValid"
                    @click="sendCode"
                  >
                    {{ sendButton }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-btn color="error" width="40%" @click="logout">退出登录</v-btn></v-row
    >
  </v-container>
</template>

<script>
import Message from '@/components/Message.vue'
import DiscussionCard from '@/components/DiscussionCard.vue'

export default {
  name: 'Me',
  components: { Message, DiscussionCard },
  data() {
    return {
      profile: {},
      showPassWdDialog: false,
      newPassWd: '',
      codeRules: [
        (v) => !!v || '内容不能为空',
        (v) => /^[0-9]{6}$/.test(v) || '验证码格式不对',
      ],
      passwordRules: [
        (v) => !!v || '内容不能为空',
        (v) => v.length <= 32 || '密码不能超过32字符',
        (v) => v.length >= 8 || '密码不能少于8字符',
      ],
      sendButton: '发送验证码',
      sendValid: true,
    }
  },
  methods: {
    sendCode() {
      this.sendButtonChangeStatus()
      this.$refs.message.info('验证码已发送, 请检查邮件以继续')
      this.$axios
        .get('register/', {
          params: {
            username: this.username,
            email: this.email,
            usage: 'change_password',
          },
        })
        .then((response) => {
          if (response.data.data !== 0) {
            this.$refs.message.error(response.data.msg)
          } else {
            this.$refs.message.success(response.data.msg)
          }
        })
    },
    sendButtonChangeStatus() {
      this.sendValid = false
      for (let i = 60; i >= 0; i--) {
        setTimeout(() => {
          this.sendButton = i
          if (this.sendButton === 0) {
            this.sendButton = '发送验证码'
            this.sendValid = true
          }
        }, 1000 * (60 - i))
      }
    },
    getUserInfo() {
      this.$axios
        .get('/profile/')
        .then((r) => {
          this.profile = r.data
        })
        .catch((e) => {
          this.$refs.message.error(e.r.data.msg)
        })
    },
    logout() {
      localStorage.clear()
      console.log('111111111')
      this.$feUtils.reloadAll()
      console.log('2222222222222222')
    },
    getEmailAuthCode() {},
    changePassWd() {
      alert('还没写完')
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.getUserInfo()
      },
    },
  },
}
</script>
