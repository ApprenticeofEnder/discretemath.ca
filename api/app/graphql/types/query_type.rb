module Types
  class QueryType < Types::BaseObject
    field :course, resolver: Queries::Course
    field :courses, resolver: Queries::Courses
    field :course_session, resolver: Queries::CourseSession
    field :test, resolver: Queries::Test
    field :tests, resolver: Queries::Tests
    field :multiple_choice_questions, resolver: Queries::MultipleChoiceQuestions
    field :questions, resolver: Queries::Questions
  end
end
