module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        done: Boolean,
        eventStart: Date,
        eventEnd: Date,
        userID: Number
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Event = mongoose.model("event", schema);
    return Event;
  };