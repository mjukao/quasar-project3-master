import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ตรวจสอบหัวข้อ (Title)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('วิวัฒนาการของโลกสมัยใหม่.')
  })
  it('check text content to be as defined in variable', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: 'ฉันรักวิว.',
          nickname: 'โดนัท',
          firstName: 'ภาคิน',
          secondName: 'อินแถลง',
          studentCode : '6604101365',
        }
      },
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('ฉันรักวิว.')
  })

})
test('ทดสอบว่ามีฟอร์ม (form)', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('form').exists()).toBe(true)
})

test('ทดสอบว่าในฟอร์ม(form) มีการรับค่า (input)', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('form > input').exists()).toBe(true)
})

test('ทดสอบว่ามีปุ่ม (Button)', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('button').exists()).toBe(true)
})
