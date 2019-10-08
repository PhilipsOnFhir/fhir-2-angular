import { R4_1_ContactPointSystemEnum } from './R4_1_ContactPointSystemEnum'
import { R4_1_ContactPointUseEnum } from './R4_1_ContactPointUseEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_ContactPoint      extends R4_1_Element
{

   static def : string = 'ContactPoint';
   system : R4_1_ContactPointSystemEnum ;
   value : string ;
   use : R4_1_ContactPointUseEnum ;
   rank : string ;
   period : R4_1_Period ;
}
