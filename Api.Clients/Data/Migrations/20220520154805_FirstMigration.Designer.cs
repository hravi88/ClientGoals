// <auto-generated />
using System;
using Api.Clients.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Api.Clients.Data.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    [Migration("20220520154805_FirstMigration")]
    partial class FirstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.5");

            modelBuilder.Entity("Api.Clients.Data.Client", b =>
                {
                    b.Property<int>("ClientId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.HasKey("ClientId");

                    b.ToTable("Clients");

                    b.HasData(
                        new
                        {
                            ClientId = 1,
                            DateCreated = new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8792),
                            FirstName = "harsha 1",
                            LastName = "ravi 1"
                        },
                        new
                        {
                            ClientId = 2,
                            DateCreated = new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8823),
                            FirstName = "harsha 2",
                            LastName = "ravi 2"
                        },
                        new
                        {
                            ClientId = 3,
                            DateCreated = new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8827),
                            FirstName = "harsha 3",
                            LastName = "ravi 3"
                        },
                        new
                        {
                            ClientId = 4,
                            DateCreated = new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8830),
                            FirstName = "harsha 4",
                            LastName = "ravi 4"
                        });
                });

            modelBuilder.Entity("Api.Clients.Data.Goal", b =>
                {
                    b.Property<int>("GoalId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("ClientId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("TEXT");

                    b.Property<string>("Details")
                        .IsRequired()
                        .HasMaxLength(10000)
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("TEXT");

                    b.HasKey("GoalId");

                    b.HasIndex("ClientId");

                    b.ToTable("Goals");

                    b.HasData(
                        new
                        {
                            GoalId = 1,
                            ClientId = 1,
                            DateCreated = new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8836),
                            Details = "Details 1",
                            Title = "Title 1"
                        },
                        new
                        {
                            GoalId = 2,
                            ClientId = 2,
                            DateCreated = new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8841),
                            Details = "Details 2",
                            Title = "Title 1"
                        },
                        new
                        {
                            GoalId = 3,
                            ClientId = 3,
                            DateCreated = new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8844),
                            Details = "Details 3",
                            Title = "Title 1"
                        },
                        new
                        {
                            GoalId = 4,
                            ClientId = 4,
                            DateCreated = new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8848),
                            Details = "Details 4",
                            Title = "Title 1"
                        });
                });

            modelBuilder.Entity("Api.Clients.Data.Goal", b =>
                {
                    b.HasOne("Api.Clients.Data.Client", "Client")
                        .WithMany("Goals")
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Client");
                });

            modelBuilder.Entity("Api.Clients.Data.Client", b =>
                {
                    b.Navigation("Goals");
                });
#pragma warning restore 612, 618
        }
    }
}
