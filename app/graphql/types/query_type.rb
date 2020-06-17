module Types

  class QueryType < Types::BaseObject
    field :items,
          [Types::ItemType],
          null: false,
          description: "Returns a list of items in the martian library"

    def items
      Item.preload(:user)
    end

    field :item,
          Types::ItemType,
          null: false do
            argument :id, ID, required: true
          end

    def item(id:)
      Item.find(id)
    end

    field :me,
          Types::UserType,
          null: true

    def me
      context[:current_user]
    end
  end
end
