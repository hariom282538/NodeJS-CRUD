var mongoose = require('mongoose');

var LocationSchema = mongoose.Schema({
  location_name: {
      type: String,
      required: true
  },
  points: { 'type': {type: String, enum: "Point", default: "Point"}, coordinates: { type: [Number],   default: [0,0]} },
  emotion: {
      type: String,
      enum: ['angry','sad','happy','neutral'],
      default: 'happy',
      required: true
  }

}, {
    timestamps: true
});

LocationSchema.index({ "points": "2dsphere" });

module.exports = mongoose.model('Location', LocationSchema);
