# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  user_info       :string           not null
#  country         :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    attr_reader :password

    validates :username, :email, :user_info, :country, :password_digest, :session_token, presence: true
    validates :username, :email,  uniqueness: true
    validates :password, length: { minimum: 6}, allow_nil: true

    has_many :lessons, :dependent => :delete_all,
    foreign_key: :author_id

    has_one_attached :photo

    after_initialize :ensure_session_token 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user 
        user.is_password?(password) ? user : nil
    end
    
    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    
    def reset_session_token! 
        User.generate_session_token
        save!
        self.session_token
    end
    
    private
    
    def ensure_session_token
       self.session_token ||= User.generate_session_token
    end


end
