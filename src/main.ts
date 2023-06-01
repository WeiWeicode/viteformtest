import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import ElementUI from 'element-plus/es/index'
import 'element-plus/dist/index.css'
import formCreate from '@form-create/element-ui'
// import FcDesigner from '@form-create/designer'
import App from './App.vue'


const app = createApp(App)


app.use(ElementPlus)
app.use(ElementUI)
app.use(formCreate)
app.mount('#app')

// createApp(App).mount('#app')
