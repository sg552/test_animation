# -*- encoding : utf-8 -*-
require 'capistrano-rbenv'
load 'deploy/assets'
ssh_options[:port] = 22
set :rake, "bundle exec rake"

set :copy_local_tar, "/usr/bin/gnutar" if RUBY_PLATFORM.match(/darwin/)
set :application, "mobile CMS"
set :repository, "."
set :scm, :none
set :deploy_via, :copy

#set(:server_type) {
#  Capistrano::CLI.ui.ask("== which server do you want to deploy to? ? ")
#}
#case server_type.chomp
#  when 'test32'
#    server = SERVER_TEST_32
#    password = 'Q7sKxQhifoM8'
#end
server = 'siwei.me'
password = 'sss333'
puts "== password for #{server} is: #{password}"

role :web, server
role :app, server
role :db,  server, :primary => true
role :db,  server

set :deploy_to, "/opt/app/siwei/html/animation"
default_run_options[:pty] = true

# change to your username
set :user, "root"

namespace :deploy do
  task :start do
  end
  task :stop do
  end
  task :restart, :roles => :app, :except => { :no_release => true } do
  end
  task :db_migrate do
  end

  namespace :assets do
    task :precompile do
    end
  end
end


desc "Copy database.yml to release_path"
task :cp_database_yml do
end

before "deploy:assets:precompile", :cp_database_yml
#after "deploy", "deploy:restart"
