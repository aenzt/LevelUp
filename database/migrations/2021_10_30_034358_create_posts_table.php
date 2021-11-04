<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('userId');
            $table->string('firstName');
            $table->string('lastName');
            $table->integer('plasticType')->nullable();
            $table->integer('paperType')->nullable();
            $table->integer('glassType')->nullable();
            $table->integer('metalType')->nullable();
            $table->string('streetAddress');
            $table->string('province');
            $table->string('postalCode');
            $table->string('city');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
