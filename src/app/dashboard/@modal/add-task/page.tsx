import { Modal, TaskForm } from '@/components'

export default function AddTask() {
  return (
    <Modal routeBack="/dashboard">
      <TaskForm />
    </Modal>
  )
}
