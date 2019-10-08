import { STU3_ContactPointSystemEnum } from './STU3_ContactPointSystemEnum'
import { STU3_ContactPointUseEnum } from './STU3_ContactPointUseEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Period } from './STU3_Period'

export class STU3_ContactPoint      extends STU3_Element
{

   static def : string = 'ContactPoint';
   system : STU3_ContactPointSystemEnum ;
   value : string ;
   use : STU3_ContactPointUseEnum ;
   rank : string ;
   period : STU3_Period ;
}
