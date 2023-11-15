import React from 'react';
import Image from 'next/image';
import { randomUUID } from 'crypto';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import TitleSection from '@/components/landing-page/title-section';
import { Button } from '@/components/ui/button';
import { CLIENTS, USERS, PRICING_CARDS, PRICING_PLANS } from '@/lib/constants';
import CustomCard from '@/components/landing-page/custom-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import AppBanner from '../../../public/appBanner.png';
import CalBanner from '../../../public/cal.png';
import Diamond from '../../../public/icons/diamond.svg';
import CheckIcon from '../../../public/icons/check.svg';
// import { Divide } from 'lucide-react';

type Props = {}

const HomePage = (props: Props) => {
  return (
    <>
        {/* Landing Top */}
        <section className='overflow-hidden px-4 mt-10 gap-4
                   md:justify-center md:items-center
                   sm:px-6 sm:flex sm:flex-col'
        >
            <TitleSection 
                pill="✨ Your workspace, perfected" 
                title="All-In-One Collaboration and Productivity Platform"
            />
            <div className='bg-white p-[2px] mt-6 rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px]'>
                <Button 
                    variant='btn-secondary' 
                    className='w-full rounded-[10px] p-6 text-2xl bg-background'
                >
                    Get Cypress Free
                </Button>
            </div>
            <div className='flex justify-center items-center relative w-[750px] mt-[-40px] ml-[-50px] 
                            md:mt-[-90px] sm:w-full sm:ml-0'
            >
                <Image src={AppBanner} alt="Application Banner" />
            </div>
            <div className='absolute top-[50%] bottom-0 left-0 right-0 z-10 bg-gradient-to-t dark:from-background'>

            </div>
        </section>
        {/* Clients */}
        <section className='relative'>
            <div className="flex overflow-hidden
                            after:absolute after:content[''] after:w-20 after:right-0 after:top-0 after:bottom-0 after:z-10 after:dark:from-brand-dark after:to-transparent after:bg-gradient-to-l
                            before:absolute before:content[''] before:w-20 before:left-0 before:top-0 before:bottom-0 before:z-10 before:dark:from-brand-dark before:to-transparent before:bg-gradient-to-r"
            >
                {([...Array(2)].map((arr) => 
                    <div key={arr} className='flex flex-nowrap animate-slide'>
                        {CLIENTS.map((client) => (
                            <div key={client.alt} className='relative w-[200px] m-20 shrink-0 flex items-center'>
                                <Image src={client.logo} alt={client.alt} width={200} className='object-contain max-w-none'/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
        {/* Features */}
        <section className='relative flex flex-col justify-center items-center px-4 sm:px-6'>
            <div className='absolute w-[30%] h-32 rounded-full blur-[120px] bg-brand-primaryPurple/50 top-22 -z-10'></div>
            <TitleSection
                title="Keep track of your meetings all in one place"
                subheading="Capture your ideas, thoughts and meeting notes in a structured and organised manner."
                pill="Features"
            />
            <div className='relative flex justify-center items-center max-w-[450px] mt-10 rounded-2xl border-8 border-washed-purple-300 border-opacity-10 sm:ml-0'>
                <Image src={CalBanner} alt='Calender Banner' className='rounded-2xl'/>
            </div>
        </section>
        {/* Testimonials */}
        <section className='relative'>
            <div className='absolute w-full h-32 rounded-full blur-[120px] bg-brand-primaryPurple/50 top-56 -z-10'></div>
            <div className='flex flex-col mt-20 px-4 overflow-x-hidden overflow-visible sm:px-6'>
                <TitleSection
                    title="Trusted by all"
                    subheading="Join thousands of satisfied users who rely on our platform for their 
                    personal and professional productivity needs."
                    pill="Testimonials"
                />
                {[...Array(2)].map((arr, index) => (
                    <div 
                        key={randomUUID()}
                        className={twMerge(
                            clsx('flex flex-nowrap gap-6 mt-10 self-start', {
                                'flex-row-reverse': index === 1,
                                'animate-[slide_250s_linear_infinite]': true,
                                'animate-[slide_250s_linear_infinite_reverse]': index === 1,
                                'ml-[100vw]': index === 1,
                            }),
                            'hover:paused'
                        )}
                    >
                        {USERS.map((testimonial, index) => (
                            <CustomCard 
                                key={testimonial.name} 
                                className='w-[500px] shrink-0s rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background'
                                cardHeader={
                                    <div className='flex items-center gap-4'>
                                        <Avatar>
                                            <AvatarImage src={`../../../../../avatars/${index + 1}.png`} />
                                            <AvatarFallback>AV</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle className='text-foreground'>
                                                {testimonial.name}
                                            </CardTitle>
                                            <CardDescription className='dark:text-washed-purple-800'>
                                                {testimonial.name.toLocaleLowerCase()}
                                            </CardDescription>
                                        </div>
                                    </div>
                                }
                                cardContent={
                                    <p className='dark:text-washed-blue-800'>
                                        {testimonial.message}
                                    </p>
                                }
                            >
                            </CustomCard>
                        ))}
                    </div>
                ))}
            </div>
        </section>
        {/* Pricing Plans */}
        <section className='mt-20 px-4 sm:px-6'>
            <TitleSection
                title="The Perfect Plan For You"
                subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
                pill="Pricing"
            />
            <div className='flex flex-col-reverse justify-center items-center mt-10 gap-4 sm:flex-row sm:items-stretch'>
                {PRICING_CARDS.map((card) => (
                    <CustomCard 
                        key={card.planType}
                        className={clsx(
                            'relative w-[300px] rounded-2xl background-blur-3xl dark:bg-black/40',
                            {
                                'border-brand-primaryPurple/70': card.planType === PRICING_PLANS.proplan,
                            }
                        )}
                        cardHeader={
                            <CardTitle className='text-2xl font-semibold'>
                                {card.planType === PRICING_PLANS.proplan && (
                                    <>
                                        <div className='absolute top-0 -z-10 hidden w-full h-32 blur-[120px] rounded-full bg-brand-primaryPurple/80 dark:block'></div>
                                        <Image src={Diamond} alt='Pro Plan Icon' className='absolute top-6 right-6' />
                                    </>
                                )}
                                {card.planType}
                            </CardTitle>
                        }
                        cardContent={
                            <CardContent className='p-0'>
                                <span className='font-normal text-2xl'>
                                    ${card.price}
                                </span>
                                {+card.price > 0 ? (
                                    <span className='ml-1 dark:text-washed-purple-800'>/mo</span>
                                ) : (
                                    ''
                                )}
                                <p className='dark:text-washed-blue-800'>
                                    {card.description}
                                </p>
                                <Button className='w-full mt-4 whitespace-nowrap'>
                                    {card.planType === PRICING_PLANS.proplan ? "Go Pro" : "Get Started"}
                                </Button>
                            </CardContent>
                        }
                        cardFooter={
                            <ul className='flex flex-col gap-4 mb-2 font-normal'>
                                <small>{card.highlightFeature}</small>
                                {card.features.map((feature) => (
                                    <li key={feature} className='flex items-center gap-2'>
                                        <Image src={CheckIcon} alt='Check Icon'/>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        }
                    >
                    </CustomCard>
                ))}
            </div>
        </section>
    </>
  );
};

export default HomePage;

