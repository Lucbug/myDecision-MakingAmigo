import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


Input = new Mongo.Collection("input");

NodeValue = new SimpleSchema ( {
    value : {
        type : [String],
        label : "value for the node"
    }
});

Input.attachSchema ( new SimpleSchema ({
    ParentGroup : {
        type : [NodeValue],
        minCount : 1,
        label : "Node level name"
    }
}));

Input.allow({
    insert : function() {
        return true;
    },
    update : function() {
        return true;
    },
    remove : function() {
        return true;
    }
});
