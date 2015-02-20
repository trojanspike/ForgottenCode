<?php

class Chatapp_Tables {

	/**
	 * Make changes to the database.
	 *
	 * @return void
	 */
	public function up()
	{
            Schema::create('chatapp', function($table){
                $table->increments('id');
                $table->string('username')->nullable();
                $table->string('message', 200)->nullable();
                $table->timestamps();
            });
	}

	/**
	 * Revert the changes to the database.
	 *
	 * @return void
	 */
	public function down()
	{
            Schema::drop('chatapp');
	}

}