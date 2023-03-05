import { defineStore } from "pinia"

export const favRepositories = defineStore("counter", {
  state: () => {
    return { repositories: [] }
  },
  actions: {
    addRepo(repository) {
      const item = this.repositories.find((i) => i.id === repository.id)

      if (!item) {
        this.repositories.push(repository)
        console.log(this.repositories)
        return item
      }

      this.removeRepo(repository)
      return item
    },
    removeRepo(repository) {
      const item = this.repositories.find((i) => i === repository)
      if (item) {
        this.repositories.splice(this.repositories.indexOf(item), 1)
      }
    },
  },
})
