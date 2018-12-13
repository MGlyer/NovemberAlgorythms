class Log {
  constructor() {
    this.hist = []
  }

  record(record_id) {
    if (this.hist.length === 10) {
      this.hist.unshift()
    }
    this.hist.push(record_id)
  }

  get_last(i) {
    return this.hist.length <= i ? this.hist[i] : `there have been less than ${i} actions logged`
  }

}